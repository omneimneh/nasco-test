'use client'

import React, {useState} from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";
import {User} from "@nextui-org/user";
import {Skeleton} from "@nextui-org/skeleton";
import {Select, SelectItem} from "@nextui-org/select";
import {Pagination} from "@nextui-org/pagination";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import {IResponse, IResponseUser} from "@/lib/types";
import {Tooltip} from "@nextui-org/tooltip";
import {EyeIcon, DeleteIcon, EditIcon, CloseIcon} from "@nextui-org/shared-icons";
import {Link} from "@nextui-org/link";
import clsx from "clsx";
import {Input} from "@nextui-org/input";
import {SearchIcon} from "@/components/icons";
import {Card, CardBody} from "@nextui-org/card";
import {Button} from "@nextui-org/button";

const columns = [
  {
    key: "name",
    label: "NAME"
  },
  {
    key: "login",
    label: "LOGIN"
  },
  {
    key: "gender",
    label: "GENDER"
  },
  {
    key: "age",
    label: "AGE"
  },
  {
    key: "phone",
    label: "PHONE"
  },
  {
    key: "cell",
    label: "CELL"
  },
  {
    key: "nat",
    label: "NAT"
  },
  {
    key: "actions",
    label: "ACTIONS"
  }
];

const nationalities = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IN', 'IR', 'MX', 'NL', 'NO', 'NZ', 'RS', 'TR', 'UA', 'US'];

export interface EmployeesTableProps {
  className?: string;
}

export default function EmployeesTable({className}: EmployeesTableProps) {

  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [nat, setNat] = useState<typeof nationalities[number]>();

  const {
    data,
    error,
    isLoading
  } = useSWR<IResponse>(`https://randomuser.me/api/?page=${page}&results=${10}&seed=static&nat=${nat}`, fetcher);


  const renderCell = React.useCallback((user: IResponseUser, columnKey: string | number) => {
    switch (columnKey) {
      case "name":
        return (
            <User
                avatarProps={{
                  radius: "lg",
                  src: user.picture.thumbnail
                }}
                name={`${user.name.first} ${user.name.last}`}
                description={user.email}
            />
        );
      case "login":
        return user.login.uuid;
      case "gender":
        return user.gender;
      case "location":
        return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{user.location.city}, {user.location.state}, {user.location.country}</p>
              <p className="text-bold text-sm capitalize text-default-400">{user.location.street.name} ({user.location.street.number})</p>
            </div>
        )
      case "age":
        return user.dob.age;
      case "phone":
        return user.phone;
      case "cell":
        return user.cell;
      case "nat":
        return user.nat;
      case "actions":
        return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <Link href={`/users/${user.login.uuid}`}
                      className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon/>
                </Link>
              </Tooltip>
              <Tooltip content="Edit">
                <Link href={`/users/${user.login.uuid}`}
                      className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon/>
                </Link>
              </Tooltip>
              <Tooltip content="Delete">
                <Link onClick={() => confirm('Are you sure you want to delete this user?')}
                      className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon/>
                </Link>
              </Tooltip>
            </div>
        )
    }
  }, []);

  if (error) {
    return (
        <Card>
          <CardBody>
            <p>Something went wrong, please try again</p>
          </CardBody>
        </Card>
    )
  }

  return (
      <div className={clsx('flex flex-col gap-4 items-center', className)}>
        <div className='flex flex-row gap-4 w-full'>
          <Input
              onChange={e => setSearchText(e.target.value)}
              value={searchText}
              aria-label="Search"
              classNames={{
                mainWrapper: 'flex-1',
                inputWrapper: "bg-default-100",
                input: "text-sm",
              }}
              labelPlacement="outside"
              placeholder="Search..."
              startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>
              }
              type="search"
          />
          <Select placeholder="Nationality" className="max-w-xs" selectedKeys={nat ? [nat] : []}
                  onChange={e => setNat(e.target.value)}>
            {nationalities.map(nat => <SelectItem key={nat} value={nat}>{nat}</SelectItem>)}
          </Select>
          <Button disabled={!nat && searchText.length === 0} isIconOnly onClick={() => {
            setNat(undefined);
            setSearchText("");
          }}>
            <CloseIcon/>
          </Button>
        </div>
        <Table aria-label="list of employees" className={className}>
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          {isLoading ?
              <TableBody items={[1, 2, 3].map(i => ({id: i}))}>
                {(item) => (
                    <TableRow key={item.id}>
                      {() => <TableCell><Skeleton className='w-24 h-3 rounded-lg'/></TableCell>}
                    </TableRow>
                )}
              </TableBody>
              :
              <TableBody
                  items={data?.results.filter(user => searchText.length === 0 || `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchText))}>
                {(item) => (
                    <TableRow key={item.login.uuid}>
                      {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
              </TableBody>
          }
        </Table>
        {data && (
            <Pagination page={page} total={10} onChange={page => setPage(page)}/>
        )}
      </div>
  );
}

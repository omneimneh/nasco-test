'use client';

import useSWR from "swr";
import {IResponse} from "@/lib/types";
import fetcher from "@/lib/fetcher";
import {User} from "@nextui-org/user";
import React, {useState} from "react";
import {Skeleton} from "@nextui-org/skeleton";
import {Card, CardBody} from "@nextui-org/card";
import {Code} from "@nextui-org/code";
import {Button} from "@nextui-org/button";

export interface EmployeeDetailsProps {
  id: string;
}

export default function EmployeeDetails({}: EmployeeDetailsProps) {

  const {
    data,
    error,
    isLoading
  } = useSWR<IResponse>(`https://randomuser.me/api/?page=1&results=1&seed=static`, fetcher);

  const [rawVisible, setRawVisible] = useState(false);


  if (isLoading) {
    return (
        <div className="max-w-[300px] w-full flex items-center gap-3">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12"/>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg"/>
            <Skeleton className="h-3 w-4/5 rounded-lg"/>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <Card>
          <CardBody>
            <p>Something went wrong, please try again</p>
          </CardBody>
        </Card>
    )
  }

  const user = data!.results[0];

  return (
      <div className='flex flex-col gap-4'>
        <div>
          <User
              avatarProps={{
                radius: "lg",
                size: "lg",
                src: user.picture.thumbnail
              }}
              name={`${user.name.first} ${user.name.last}`}
              description={user.email}
          />
        </div>
        <div>
          <Button variant="flat"
                  onClick={() => setRawVisible(prev => !prev)}>{rawVisible ? "Hide Raw" : "Show Raw"}</Button>
        </div>
        {rawVisible && (
            <Code className='max-w-full overflow-hidden'>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </Code>
        )}
      </div>
  )
}
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Nasco&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Employees List&nbsp;</h1>
				<br />
				<h1 className={title()}>
					ReactJS Test
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Built with NextJS and NextUI
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					href='/users'
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Browse Employees
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>
		</section>
	);
}

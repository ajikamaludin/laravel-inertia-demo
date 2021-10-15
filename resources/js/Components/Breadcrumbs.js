import { Link } from "@inertiajs/inertia-react";

export default function Breadcrumbs({ menus }) {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                {menus.map((menu, index) => (
                    <li key={index}>
                        <Link href={['', '#'].includes(menu.link) ? '#' : route(menu.link)}>{menu.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
import NavItem from "../NavItem/NavItem";

export default function Nav() {
    return (
        <nav className="flex items-center gap-5">
            <NavItem label="Beranda" href="/" />
            <NavItem label="Kontak" href="/" />
            <NavItem label="Paket" href="/" />
            <NavItem label="Testimoni" href="/" />
        </nav>
    );
}

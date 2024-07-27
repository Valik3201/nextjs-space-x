export default async function SiteFooter() {
  return (
    <footer className="pt-12 text-accent text-right font-light">
      SpaceX © {new Date().getFullYear()}
    </footer>
  );
}

import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Logo size="small" variant="light" />
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm opacity-75">© 2024 RecapGo. All rights reserved.</p>
            <p className="text-xs opacity-60 mt-1">Transform meetings into magic</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
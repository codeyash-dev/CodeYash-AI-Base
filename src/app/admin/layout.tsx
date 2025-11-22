export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      {children}
    </div>
  );
}

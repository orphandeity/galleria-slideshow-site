interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

import ConvexClientProvider from "./convex-provider";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return <ConvexClientProvider>{children}</ConvexClientProvider>;
};

export default RootLayout;

import StoreProvider from "./StoreProvider";
import { Goods } from "./components/goods";

interface Props {
  title: string,
  children: React.ReactNode
  footerText: string
}

const contentStyle: React.CSSProperties = {
  minHeight: "auto",
};

export default function Home(props: Props) {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white">
        <h1 className="!text-lime-500 !text-3xl font-bold my-2">{props.title}</h1>
      </div>
      <div className='mb-[2rem]' style={contentStyle}>
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
          <div className="main-container">
            <div className="heading">
              <h1 className="heading__title text-4xl">
                Goods
              </h1>
            </div>
            <div className="cards">
              <StoreProvider>
                <Goods />
              </StoreProvider>
            </div>
          </div>
        </main>
      </div>
      <div>
        {props.footerText}
      </div>
    </div>
  );
}

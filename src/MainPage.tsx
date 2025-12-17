type MainPageProps = {
  onOpenDoc: () => void;
};

const MainPage = ({ onOpenDoc }: MainPageProps) => {
  return (
    <div className="">
      <img onClick={onOpenDoc} src="/images/home-tunduk.png"/>
    </div>
  );
};

export default MainPage;

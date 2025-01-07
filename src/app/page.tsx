
// pages/index.tsx
import Header from './components/Header';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <img
        src="bgicecream.jpg"
        alt="bgimg"
        className="object-cover w-full h-full"
      />
      {/*
      <main
        className="min-h-screen p-0 text-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/bgicecream.jpg)' }} // Update the path to your image
      > */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div>
            <h1 className="text-4xl font-bold text-white">Welcome to Ice Cream Paradise!</h1>
            <p className="mt-4 text-white">Your favorite ice cream flavors await you.</p>
          </div>
        </div>
     {/* </main>*/}
      <Footer />
    </div>
  );
};

export default Home;

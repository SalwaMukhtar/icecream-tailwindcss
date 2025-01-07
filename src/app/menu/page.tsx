// pages/menu.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

const Menu: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-10 text-center bg-gray-100">
        <h1 className="text-3xl font-bold">Our Ice Cream Menu</h1>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ice Cream 1 */}
          <div className="border p-4">
            <img src="/icecreamc1.jpg" alt="Chocolate Delight" className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mt-4">Chocolate Delight</h2>
            <p className="mt-2">Rich chocolate ice cream with fudge swirls.</p>
          </div>
          
          {/* Ice Cream 2 */}
          <div className="border p-4">
            <img src="/icecreams.jpg" alt="Strawberry Bliss" className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mt-4">Strawberry Bliss</h2>
            <p className="mt-2">Creamy strawberry ice cream with fresh chunks of strawberry.</p>
          </div>
          
          {/* Ice Cream 3 */}
          <div className="border p-4">
            <img src="/icecreamv.jpg" alt="Vanilla Dream" className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mt-4">Vanilla Dream</h2>
            <p className="mt-2">Classic vanilla ice cream made with real vanilla beans.</p>
          </div>

          {/* Ice Cream 4 */}
          <div className="border p-4">
            <img src="/icecreamp.jpg" alt="Minty Fresh" className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mt-4">Minty Fresh</h2>
            <p className="mt-2">Cool and refreshing mint ice cream with chocolate chunks.</p>
          </div>

          {/* Ice Cream 5 */}
          <div className="border p-4">
            <img src="/icecreamc.jpg" alt="Cookie Crumble" className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mt-4">Cookie Crumble</h2>
            <p className="mt-2">Vanilla ice cream with crushed cookie bits and a caramel swirl.</p>
          </div>

          {/* Ice Cream 6 */}
          <div className="border p-4">
            <img src="/icecreamp1.jpg" alt="Pistachio Perfection" className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mt-4">Pistachio Perfection</h2>
            <p className="mt-2">Creamy pistachio ice cream with roasted pistachio pieces.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;

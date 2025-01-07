// components/Footer.tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Ice Cream Paradise. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  
  
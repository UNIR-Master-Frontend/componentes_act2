// import "./styles.css";
export const imageneslib = [
  {
    id: 1,
    src: "https://m1.paperblog.com/i/587/5872745/libros-lecturas-hoy-cien-anos-soledad-gabriel-L-PTw5rt.png",
    alt: "Cien años de soledad",
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/proxy/tXM_jvtNb17MjFvl6D_SCfK_6rz2bafwHrGIVdXElSygM5RrnYUvcZ2kbQS84wsloJdvmQpyR9xfVTBgGtVzkzHKnR95VEPeS9qEww4",
    alt: "Cálculo: Trascendentes Tempranas",
  },
  {
    id: 3,
    src: "https://booksondemand.ma/cdn/shop/products/71Y67UzW5GL.jpg?v=1631701338&width=1946",
    alt: "Clean Code: A Handbook of Agile Software Craftsmanship",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlO-Z9aROrWWoOaJopKvO5Gb9hgSdyC5Uymw&s",
    alt: "Sapiens: De animales a dioses",
  },
  {
    id: 5,
    src: "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/9786079377373.jpg",
    alt: "Breve historia del tiempo",
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87uadl8C7m2XdTkcIBMtkP0InMAXfWBJFzg&s",
    alt: "Principios de Economía libro",
  },
  {
    id: 7,
    src: "https://i0.wp.com/www.livingbookpress.com/wp-content/uploads/2025/02/9781761533501-main.webp?fit=1024%2C1024&ssl=1",
    alt: "1984",
  },
  {
    id: 8,
    src: "https://biomedica.com.pl/wp-content/uploads/2022/01/1662.png",
    alt: "Biología",
  },
  {
    id: 9,
    src: "https://panamericana.vtexassets.com/arquivos/ids/474326-800-auto?v=638086086298600000&width=800&height=auto&aspect=true",
    alt: "El mundo de Sofía",
  },
  {
    id: 10,
    src: "https://images.cdn2.buscalibre.com/fit-in/360x360/f6/88/f688e6f307306e2515ac3430292e5e90.jpg",
    alt: "Química: La ciencia central",
  },
];

function ImagenesLibros() {
  return (
    <div className="ImagenesLibros">
      {imageneslib.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default imageneslib;

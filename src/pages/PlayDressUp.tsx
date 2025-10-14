import { useState } from 'react';
import './PlayDressUp.css';

// Import all the icons
import hopeIcon from '../assets/dress-up/hope.png';
import pencilIcon from '../assets/dress-up/pencil.png';
import fillIcon from '../assets/dress-up/fill.png';
import eraserIcon from '../assets/dress-up/eraser.png';
import brushIcon from '../assets/dress-up/brush.png';
import rectangleIcon from '../assets/dress-up/rectangle.png';
import ellipseIcon from '../assets/dress-up/ellipse.png';
import lineIcon from '../assets/dress-up/line.png';
import textIcon from '../assets/dress-up/text.png';
import sprayCanIcon from '../assets/dress-up/spray-can.png';
import undoIcon from '../assets/dress-up/undo.png';
import redoIcon from '../assets/dress-up/redo.png';

// Helper function to get image path
const getImagePath = (filename: string) => {
  return new URL(`../assets/dress-up/${filename}`, import.meta.url).href;
};

// Category configuration
const categories = [
  { id: 'hair', name: 'Hair' },
  { id: 'dresses', name: 'Dresses' },
  { id: 'tops', name: 'Tops' },
  { id: 'bottoms', name: 'Bottoms' },
  { id: 'shoes', name: 'Shoes' },
  { id: 'hats', name: 'Hats' },
  { id: 'sunglasses', name: 'Sunglasses' },
  { id: 'bags', name: 'Bags' },
  { id: 'jewelry', name: 'Jewelry' }
];

const categoryZIndex: Record<string, number> = {
  'jewelry': 1000,
  'sunglasses': 900,
  'bags': 800,
  'hats': 700,
  'hair': 600,
  'tops': 500,
  'bottoms': 400,
  'dresses': 300,
  'shoes': 200
};

// Clothing items data
const clothingItems: Record<string, Array<{ thumbnail: string; overlay: string; alt: string }>> = {
  hair: [
    { thumbnail: 'hope-hair.png', overlay: 'hope-hair2.png', alt: 'Hair' },
    { thumbnail: 'hope-brown-hair.png', overlay: 'hope-brown-hair2.png', alt: 'Brown Hair' },
    { thumbnail: 'hope-blonde-hair.png', overlay: 'hope-blonde-hair2.png', alt: 'Blonde Hair' },
    { thumbnail: 'hope-bow-hair.png', overlay: 'hope-bow-hair2.png', alt: 'Bow Hair' },
    { thumbnail: 'hope-brown-bun.png', overlay: 'hope-brown-bun2.png', alt: 'Brown Bun' },
    { thumbnail: 'hope-ponytail.png', overlay: 'hope-ponytail2.png', alt: 'Ponytail' }
  ],
  dresses: [
    { thumbnail: 'hope-dress.png', overlay: 'hope-dress2.png', alt: 'Dress' },
    { thumbnail: 'hope-white-dress.png', overlay: 'hope-white-dress2.png', alt: 'White Dress' },
    { thumbnail: 'hope-navy-dress.png', overlay: 'hope-navy-dress2.png', alt: 'Navy Dress' },
    { thumbnail: 'hope-blue-dress.png', overlay: 'hope-blue-dress2.png', alt: 'Blue Dress' },
    { thumbnail: 'hope-green-dress.png', overlay: 'hope-green-dress2.png', alt: 'Green Dress' },
    { thumbnail: 'hope-beige-dress.png', overlay: 'hope-beige-dress2.png', alt: 'Beige Dress' },
    { thumbnail: 'hope-black-dress.png', overlay: 'hope-black-dress2.png', alt: 'Black Dress' },
    { thumbnail: 'hope-cream-dress.png', overlay: 'hope-cream-dress2.png', alt: 'Cream Dress' },
    { thumbnail: 'hope-long-red-dress.png', overlay: 'hope-long-red-dress2.png', alt: 'Long Red Dress' },
    { thumbnail: 'hope-pink-dress.png', overlay: 'hope-pink-dress2.png', alt: 'Pink Dress' },
    { thumbnail: 'hope-red-dress.png', overlay: 'hope-red-dress2.png', alt: 'Red Dress' },
    { thumbnail: 'hope-yellow-dress.png', overlay: 'hope-yellow-dress2.png', alt: 'Yellow Dress' },
    { thumbnail: 'hope-turtleneck.png', overlay: 'hope-turtleneck2.png', alt: 'Turtleneck' },
    { thumbnail: 'hope-pinstripe.png', overlay: 'hope-pinstripe2.png', alt: 'Pinstripe' },
    { thumbnail: 'hope-shawl-outfit.png', overlay: 'hope-shawl-outfit2.png', alt: 'Shawl Outfit' },
    { thumbnail: 'hope-tennis.png', overlay: 'hope-tennis2.png', alt: 'Tennis Outfit' }
  ],
  tops: [
    { thumbnail: 'hope-cardigan.png', overlay: 'hope-cardigan2.png', alt: 'Cardigan' },
    { thumbnail: 'hope-blazer.png', overlay: 'hope-blazer2.png', alt: 'Blazer' },
    { thumbnail: 'hope-green-outfit.png', overlay: 'hope-green-outfit2.png', alt: 'Green Outfit' }
  ],
  bottoms: [
    { thumbnail: 'hope-skirt.png', overlay: 'hope-skirt2.png', alt: 'Skirt' },
    { thumbnail: 'hope-black-skirt.png', overlay: 'hope-black-skirt2.png', alt: 'Black Skirt' }
  ],
  shoes: [
    { thumbnail: 'hope-shoes.png', overlay: 'hope-shoes2.png', alt: 'Shoes' },
    { thumbnail: 'hope-white-heels.png', overlay: 'hope-white-heels2.png', alt: 'White Heels' },
    { thumbnail: 'hope-brown-heels.png', overlay: 'hope-brown-heels2.png', alt: 'Brown Heels' },
    { thumbnail: 'hope-red-heels.png', overlay: 'hope-red-heels2.png', alt: 'Red Heels' },
    { thumbnail: 'hope-brown-loafers.png', overlay: 'hope-brown-loafers2.png', alt: 'Brown Loafers' },
    { thumbnail: 'hope-boots.png', overlay: 'hope-boots2.png', alt: 'Boots' },
    { thumbnail: 'hope-bow-pumps.png', overlay: 'hope-bow-pumps2.png', alt: 'Bow Pumps' },
    { thumbnail: 'hope-slingbacks.png', overlay: 'hope-slingbacks2.png', alt: 'Slingbacks' },
    { thumbnail: 'hope-tennis-shoes.png', overlay: 'hope-tennis-shoes2.png', alt: 'Tennis Shoes' }
  ],
  hats: [
    { thumbnail: 'hope-hat.png', overlay: 'hope-hat2.png', alt: 'Hat' },
    { thumbnail: 'hope-cap.png', overlay: 'hope-cap2.png', alt: 'Cap' }
  ],
  sunglasses: [
    { thumbnail: 'hope-sunglasses.png', overlay: 'hope-sunglasses2.png', alt: 'Sunglasses' },
    { thumbnail: 'hope-thin-sunglasses.png', overlay: 'hope-thin-sunglasses2.png', alt: 'Thin Sunglasses' }
  ],
  bags: [
    { thumbnail: 'hope-black-bag.png', overlay: 'hope-black-bag2.png', alt: 'Black Bag' },
    { thumbnail: 'hope-brown-bag.png', overlay: 'hope-brown-bag2.png', alt: 'Brown Bag' },
    { thumbnail: 'hope-blue-bag.png', overlay: 'hope-blue-bag2.png', alt: 'Blue Bag' },
    { thumbnail: 'hope-green-bag.png', overlay: 'hope-green-bag2.png', alt: 'Green Bag' },
    { thumbnail: 'hope-straw-bag.png', overlay: 'hope-straw-bag2.png', alt: 'Straw Bag' },
    { thumbnail: 'hope-clutch.png', overlay: 'hope-clutch2.png', alt: 'Clutch' },
    { thumbnail: 'hope-black-handbag.png', overlay: 'hope-black-handbag2.png', alt: 'Black Handbag' },
    { thumbnail: 'hope-tote.png', overlay: 'hope-tote2.png', alt: 'Tote Bag' }
  ],
  jewelry: [
    { thumbnail: 'hope-jewellery.png', overlay: 'hope-jewellery2.png', alt: 'Jewelry' },
    { thumbnail: 'hope-gold-jewellery.png', overlay: 'hope-gold-jewellery2.png', alt: 'Gold Jewelry' },
    { thumbnail: 'hope-white-jewellery.png', overlay: 'hope-white-jewellery2.png', alt: 'White Jewelry' },
    { thumbnail: 'hope-pearls.png', overlay: 'hope-pearls2.png', alt: 'Pearls' },
    { thumbnail: 'hope-gold-chain.png', overlay: 'hope-gold-chain2.png', alt: 'Gold Chain' },
    { thumbnail: 'hope-gold-necklace.png', overlay: 'hope-gold-necklace2.png', alt: 'Gold Necklace' }
  ]
};

const colorPalette = [
  '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080',
  '#808040', '#004040', '#0080FF', '#004080', '#8000FF', '#804000',
  '#FFFFFF', '#C0C0C0', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF',
  '#FFFF80', '#00FF80', '#80FFFF', '#8080FF', '#FF80FF', '#FF8040'
];

interface Overlay {
  category: string;
  src: string;
  alt: string;
}

function PlayDressUp() {
  const [activeCategory, setActiveCategory] = useState('hair');
  const [selectedItems, setSelectedItems] = useState<Map<string, string>>(new Map());
  const [overlays, setOverlays] = useState<Overlay[]>([]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleItemClick = (category: string, item: { thumbnail: string; overlay: string; alt: string }) => {
    const currentlySelected = selectedItems.get(category);
    
    // If clicking the same item, remove it
    if (currentlySelected === item.overlay) {
      const newSelectedItems = new Map(selectedItems);
      newSelectedItems.delete(category);
      setSelectedItems(newSelectedItems);
      setOverlays(overlays.filter(o => o.category !== category));
      return;
    }
    
    // Update selected items
    const newSelectedItems = new Map(selectedItems);
    newSelectedItems.set(category, item.overlay);
    setSelectedItems(newSelectedItems);
    
    // Update overlays
    const newOverlays = overlays.filter(o => o.category !== category);
    newOverlays.push({
      category,
      src: getImagePath(item.overlay),
      alt: item.alt
    });
    
    // Sort by z-index
    newOverlays.sort((a, b) => (categoryZIndex[a.category] || 0) - (categoryZIndex[b.category] || 0));
    setOverlays(newOverlays);
  };

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">
          <img src={hopeIcon} alt="Hope" className="title-icon" />
          Fashion Icon - Paint
        </div>
        <div className="title-bar-controls">
          <button className="minimize">-</button>
          <button className="maximize">□</button>
          <button className="close" onClick={handleClose}>×</button>
        </div>
      </div>
      <div className="menu-bar">
        <div className="menu-item">File</div>
        <div className="menu-item">Edit</div>
        <div className="menu-item">View</div>
        <div className="menu-item">Colors</div>
        <div className="menu-item">Help</div>
      </div>
      <div className="main-content">
        <div className="toolbar">
          <button className="tool"><img src={pencilIcon} alt="Pencil" /></button>
          <button className="tool"><img src={fillIcon} alt="Fill" /></button>
          <button className="tool"><img src={eraserIcon} alt="Eraser" /></button>
          <button className="tool"><img src={brushIcon} alt="Color Picker" /></button>
          <button className="tool"><img src={rectangleIcon} alt="Rectangle" /></button>
          <button className="tool"><img src={ellipseIcon} alt="Circle" /></button>
          <button className="tool"><img src={lineIcon} alt="Line" /></button>
          <button className="tool"><img src={textIcon} alt="Text" /></button>
          <button className="tool"><img src={sprayCanIcon} alt="Spray" /></button>
          <button className="tool"><img src={undoIcon} alt="Undo" /></button>
          <button className="tool"><img src={redoIcon} alt="Redo" /></button>
        </div>
        <div className="canvas-area">
          <div className="canvas-container">
            <img src={hopeIcon} alt="Hope" className="background-image" />
            <div className="overlay-container">
              {overlays.map((overlay, index) => (
                <img
                  key={`${overlay.category}-${index}`}
                  src={overlay.src}
                  alt={overlay.alt}
                  className="overlay-image"
                  style={{ zIndex: categoryZIndex[overlay.category] }}
                />
              ))}
            </div>
          </div>
          <div className="color-palette">
            {colorPalette.map((color, index) => (
              <div key={index} className="color" style={{ background: color }}></div>
            ))}
          </div>
          <div className="status-bar">
            <span>100%</span>
            <span>400 x 600</span>
          </div>
        </div>
        <div className="items-sidebar">
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="items-container">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category-items ${activeCategory === category.id ? 'active' : ''}`}
                data-category={category.id}
              >
                {clothingItems[category.id]?.map((item, index) => (
                  <div
                    key={index}
                    className={`clothing-item ${selectedItems.get(category.id) === item.overlay ? 'selected' : ''}`}
                    onClick={() => handleItemClick(category.id, item)}
                  >
                    <img src={getImagePath(item.thumbnail)} alt={item.alt} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="license-footer">
        <p>
          Hope Gilbert's Musings and Research by Hope Gilbert is licensed under CC BY-ND 4.0
        </p>
      </div>
    </div>
  );
}

export default PlayDressUp;

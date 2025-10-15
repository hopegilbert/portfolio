import { useState } from 'react';

function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  // Photography categories/shoots
  const categories = [
    { id: 'all', name: 'All Photos', color: '#ff6b6b' },
    { id: 'aggression sessions', name: 'Aggression Sessions', color: '#4ecdc4' },
    { id: 'agression sessions team', name: 'Aggression Sessions Team', color: '#45b7d1' },
    { id: 'babylon', name: 'Babylon', color: '#96ceb4' },
    { id: 'burulu', name: 'Burulu', color: '#feca57' },
    { id: 'loft', name: 'Loft', color: '#ff9ff3' },
    { id: 'random', name: 'Random', color: '#54a0ff' },
    { id: 'revival', name: 'Revival', color: '#5f27cd' }
  ];

  // Featured photos from each category
  const featuredPhotos = [
    {
      id: 1,
      title: "Aggression Sessions",
      category: "aggression sessions",
      image: new URL('../assets/photography/aggression sessions/IMG_4901.jpg', import.meta.url).href,
      description: "Raw energy and emotion captured in black and white"
    },
    {
      id: 2,
      title: "Babylon",
      category: "babylon", 
      image: new URL('../assets/photography/babylon/IMG_1266.JPG', import.meta.url).href,
      description: "Intimate portraits with dramatic lighting"
    },
    {
      id: 3,
      title: "Burulu",
      category: "burulu",
      image: new URL('../assets/photography/burulu/IMG_0755.jpg', import.meta.url).href,
      description: "Natural moments and candid captures"
    },
    {
      id: 4,
      title: "Loft",
      category: "loft",
      image: new URL('../assets/photography/loft/IMG_1509.jpg', import.meta.url).href,
      description: "Architectural details and interior spaces"
    },
    {
      id: 5,
      title: "Random",
      category: "random",
      image: new URL('../assets/photography/random/IMG_0192.JPG', import.meta.url).href,
      description: "Spontaneous captures and everyday beauty"
    },
    {
      id: 6,
      title: "Revival",
      category: "revival",
      image: new URL('../assets/photography/revival/IMG_1758.JPG', import.meta.url).href,
      description: "Dynamic movement and vibrant energy"
    },
    {
      id: 7,
      title: "Aggression Sessions Team",
      category: "agression sessions team",
      image: new URL('../assets/photography/agression sessions team/IMG_1471.jpg', import.meta.url).href,
      description: "Collaborative moments and group dynamics"
    }
  ];


  // All photos from each folder
  const folderPhotos: { [key: string]: string[] } = {
    'aggression sessions': [
      new URL('../assets/photography/aggression sessions/IMG_2238.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2255.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2318.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2321.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2328.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2353.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2373.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2384.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2402.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2409.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2421.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2425.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2469.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2511.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2540.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2606.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2626.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2637.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2649.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2665.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2705.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2719.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2733.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2736.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2756.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2757.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2759.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2768.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2778.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2784.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2846.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2861.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2873.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_2919.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3011.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3038.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3082.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3083.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3088.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3114.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3171.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3221.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3246.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3311.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3321.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3336.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3408.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3440.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3591.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3638.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3681.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3725.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3728.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3734.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3739.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3790.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3827.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3841.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3861.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3883.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3891.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3955.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3974.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3981.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3986.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3990.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_3991.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4001.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4063.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4072.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4140.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4143.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4145.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4155.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4156.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4181.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4226.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4277.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4292.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4296.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4311.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4317.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4321.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4322.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4377.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4437.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4456.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4469.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4474.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4480.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4507.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4530.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4535.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4538.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4592.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4622.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4648.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4656.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4686.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4693.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4784.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4809.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4816.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4820.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4832.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4839.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4883.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4890.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4901.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4917.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4925.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4929.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4937.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4950.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_4997.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5047.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5056.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5071.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5134.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5143.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5238.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5251.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5323.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5412.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5450.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5455.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5515.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5543.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5558.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5561.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5567.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5588.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5593.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5619.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5634.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5636.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5646.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5710.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5737.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5760.jpg', import.meta.url).href,
      new URL('../assets/photography/aggression sessions/IMG_5771.jpg', import.meta.url).href
    ],
    'agression sessions team': [
      new URL('../assets/photography/agression sessions team/IMG_1382.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1384.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1390 2.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1398.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1399.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1424.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1429.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1436.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1444.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1459.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1465.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1471.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1479.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1481.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1486.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1496.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1514.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1538.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1544.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1556.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1557.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1563.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1570.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1578.jpg', import.meta.url).href,
      new URL('../assets/photography/agression sessions team/IMG_1580.jpg', import.meta.url).href
    ],
    'babylon': [
      new URL('../assets/photography/babylon/IMG_1156.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1177.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1183.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1186.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1194.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1208.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1235.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1241.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1266.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1305.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1313.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1328.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1354.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1743.jpg', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1756.jpg', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_1816.JPG', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_2009.jpg', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_2042.jpg', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_2050.jpg', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_2114.jpg', import.meta.url).href,
      new URL('../assets/photography/babylon/IMG_2131.jpg', import.meta.url).href
    ],
    'burulu': [
      new URL('../assets/photography/burulu/IMG_0718.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0720.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0723.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0742.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0755.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0758.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0768.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0777.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0784.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0787.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0827.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0850.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0865 2.jpg', import.meta.url).href,
      new URL('../assets/photography/burulu/IMG_0865.jpg', import.meta.url).href
    ],
    'loft': [
      new URL('../assets/photography/loft/IMG_1238.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1248.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1274.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1297.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1307.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1322.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1329.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1376.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1390.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1440.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1441.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1453.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1482.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1507.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1509.jpg', import.meta.url).href,
      new URL('../assets/photography/loft/IMG_1552.jpg', import.meta.url).href
    ],
    'random': [
      new URL('../assets/photography/random/IMG_0192.JPG', import.meta.url).href,
      new URL('../assets/photography/random/IMG_0197.JPG', import.meta.url).href,
      new URL('../assets/photography/random/IMG_0205.JPG', import.meta.url).href,
      new URL('../assets/photography/random/IMG_0207.JPG', import.meta.url).href,
      new URL('../assets/photography/random/IMG_1085.JPG', import.meta.url).href,
      new URL('../assets/photography/random/IMG_1172.JPG', import.meta.url).href,
      new URL('../assets/photography/random/IMG_9014.JPG', import.meta.url).href
    ],
    'revival': [
      new URL('../assets/photography/revival/IMG_1595.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1629.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1651.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1667.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1689.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1703.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1706.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1724.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1758.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1766.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1790.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1817.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1834.JPG', import.meta.url).href,
      new URL('../assets/photography/revival/IMG_1840.JPG', import.meta.url).href
    ]
  };

  return (
    <div className="photography-page">
      {/* Back Button */}
      <div className="back-button-container">
        <a href="/" className="back-button">← Back to Home</a>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="brand-title">Hope Gilbert</h1>
            <p className="hero-description">
              Capturing moments, emotions, and stories through the lens. 
              Choose from my collection of photography work or explore different themes and styles.
            </p>
          </div>
          <div className="hero-right">
            <div className="browser-window">
              <div className="browser-header">
                <div className="browser-controls">
                  <div className="control red"></div>
                  <div className="control yellow"></div>
                  <div className="control green"></div>
                </div>
              </div>
              <div className="photo-icons-grid">
                {featuredPhotos.slice(0, 9).map((photo) => (
                  <div 
                    key={photo.id} 
                    className="photo-icon"
                    onClick={() => setSelectedImage(photo.image)}
                  >
                    <img src={photo.image} alt={photo.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bestsellers-section">
        <h2 className="section-title">Featured Work</h2>
        <div className="bestsellers-scroll">
          {featuredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="bestseller-card" 
              style={{ backgroundColor: categories[photo.id % categories.length].color }}
              onClick={() => setSelectedFolder(photo.category)}
            >
              <div className="heart-icon">♡</div>
              <div className="product-image">
                <img src={photo.image} alt={photo.title} />
                </div>
              <div className="product-info">
                <h3 className="product-name">{photo.title}</h3>
                <p className="product-price">View Gallery</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="featured-images-section">
        <div className="featured-container">
          <div className="featured-header">
            <h2 className="featured-title">Featured Images</h2>
            <p className="featured-subtitle">
              A curated selection of my finest work, showcasing the diversity and artistry 
              of Hope Gilbert Photography.
            </p>
          </div>
          <div className="featured-grid">
            <div className="featured-image-large">
              <img src={new URL('../assets/photography/featured/IMG_3088.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Curated selection of finest photography</p>
              </div>
            </div>
            <div className="featured-image-large">
              <img src={new URL('../assets/photography/featured/IMG_5619.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Artistic vision and creative expression</p>
              </div>
            </div>
            <div className="featured-image-medium">
              <img src={new URL('../assets/photography/featured/IMG_0192.JPG', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Professional photography</p>
              </div>
            </div>
            <div className="featured-image-medium">
              <img src={new URL('../assets/photography/featured/IMG_0718.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Creative moments</p>
              </div>
            </div>
            <div className="featured-image-large">
              <img src={new URL('../assets/photography/featured/IMG_1328.JPG', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Artistic excellence</p>
              </div>
            </div>
            <div className="featured-image-medium">
              <img src={new URL('../assets/photography/featured/IMG_1459.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Visual storytelling</p>
              </div>
            </div>
            <div className="featured-image-medium">
              <img src={new URL('../assets/photography/featured/IMG_0787.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Creative expression</p>
              </div>
            </div>
            <div className="featured-image-small">
              <img src={new URL('../assets/photography/featured/IMG_1172.JPG', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Artistic moments</p>
              </div>
            </div>
            <div className="featured-image-small">
              <img src={new URL('../assets/photography/featured/IMG_1509.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Professional quality</p>
              </div>
            </div>
            <div className="featured-image-medium">
              <img src={new URL('../assets/photography/featured/IMG_1758.JPG', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Visual artistry</p>
              </div>
            </div>
            <div className="featured-image-small">
              <img src={new URL('../assets/photography/featured/IMG_1817.JPG', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Creative vision</p>
              </div>
            </div>
            <div className="featured-image-medium">
              <img src={new URL('../assets/photography/featured/IMG_2425.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Artistic excellence</p>
              </div>
            </div>
            <div className="featured-image-small">
              <img src={new URL('../assets/photography/featured/IMG_4155.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Visual storytelling</p>
              </div>
            </div>
            <div className="featured-image-medium">
              <img src={new URL('../assets/photography/featured/IMG_5056.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Creative expression</p>
              </div>
            </div>
            <div className="featured-image-small">
              <img src={new URL('../assets/photography/featured/IMG_5710.jpg', import.meta.url).href} alt="Featured work" />
              <div className="image-overlay">
                <h3>Featured Work</h3>
                <p>Artistic vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="photo-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedImage(null)}>
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}

      {/* Folder Gallery Modal */}
      {selectedFolder && (
        <div className="folder-modal" onClick={() => setSelectedFolder(null)}>
          <div className="folder-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedFolder(null)}>
              <i className="fas fa-times"></i>
            </button>
            <h2 className="folder-title">{selectedFolder.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h2>
            <div className="folder-grid">
              {folderPhotos[selectedFolder]?.map((photo: string, index: number) => (
                <div 
                  key={index} 
                  className="folder-photo"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img src={photo} alt={`${selectedFolder} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap');

        /* Hide global navigation */
        .photography-page .navigation,
        .photography-page .name-header,
        .photography-page .back-button {
          display: none !important;
        }

        .photography-page {
          min-height: 100vh;
          background: #faf9f7;
          font-family: 'Inter', sans-serif;
        }

        /* Top Navigation */
        .back-button-container {
          background: #dc143c;
          padding: 20px;
          text-align: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .back-button {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 18px;
        }

        .back-button:hover {
          color: #f0f0f0;
        }

        /* Hero Section */
        .hero-section {
          padding: 120px 0 60px 0;
          background: #faf9f7;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .hero-left {
          background: #ffb3ba;
          padding: 40px;
          border-radius: 20px;
        }

        .brand-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #dc143c;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .hero-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #2c3e50;
          margin-bottom: 30px;
        }


        .hero-right {
          display: flex;
          justify-content: center;
        }

        .browser-window {
          background: #dc143c;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .browser-header {
          margin-bottom: 20px;
        }

        .browser-controls {
          display: flex;
          gap: 8px;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.red { background: #ff5f56; }
        .control.yellow { background: #ffbd2e; }
        .control.green { background: #27ca3f; }

        .photo-icons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          max-width: 300px;
        }

        .photo-icon {
          aspect-ratio: 1;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .photo-icon:hover {
          transform: scale(1.05);
        }

        .photo-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Bestsellers Section */
        .bestsellers-section {
          padding: 60px 0;
          background: white;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 30px;
          text-align: left;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
        }

        .bestsellers-scroll {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding: 0 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bestseller-card {
          min-width: 200px;
          border-radius: 15px;
          padding: 20px;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .bestseller-card:hover {
          transform: translateY(-5px);
        }

        .heart-icon {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 1.2rem;
          color: white;
        }

        .product-image {
          margin-bottom: 15px;
        }

        .product-image img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 8px;
        }

        .product-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
          margin-bottom: 5px;
        }

        .product-price {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Style Section */
        .featured-images-section {
          padding: 80px 0;
          background: white;
        }

        .featured-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .featured-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .featured-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .featured-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(6, 200px);
          gap: 15px;
        }

        .featured-image-large {
          grid-column: span 6;
          grid-row: span 2;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
        }

        .featured-image-medium {
          grid-column: span 4;
          grid-row: span 2;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
        }

        .featured-image-small {
          grid-column: span 2;
          grid-row: span 1;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
        }

        .featured-image-large img,
        .featured-image-medium img,
        .featured-image-small img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .featured-image-large:hover img,
        .featured-image-medium:hover img,
        .featured-image-small:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .featured-image-large:hover .image-overlay,
        .featured-image-medium:hover .image-overlay,
        .featured-image-small:hover .image-overlay {
          opacity: 1;
        }

        .image-overlay h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .image-overlay p {
          font-size: 0.9rem;
          opacity: 0.9;
        }



        /* Modal */
        .photo-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          cursor: pointer;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .modal-content img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 12px;
        }

        .close-modal {
          position: absolute;
          top: -50px;
          right: 0;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: background 0.3s ease;
        }

        .close-modal:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Folder Modal */
        .folder-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          cursor: pointer;
        }

        .folder-modal-content {
          background: white;
          border-radius: 20px;
          padding: 30px;
          max-width: 95%;
          max-height: 90%;
          width: 1200px;
          overflow-y: auto;
          position: relative;
        }

        .folder-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 30px;
          text-align: center;
        }

        .folder-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 15px;
        }

        .folder-photo {
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .folder-photo:hover {
          transform: scale(1.05);
        }

        .folder-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .featured-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(8, 150px);
            gap: 10px;
          }

          .featured-image-large,
          .featured-image-medium,
          .featured-image-small {
            grid-column: span 1;
            grid-row: span 1;
          }

          .brand-title {
            font-size: 2.5rem;
          }

          .bestsellers-scroll {
            padding: 0 10px;
          }


          .folder-modal-content {
            width: 95%;
            max-width: 95%;
          }

          .folder-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 10px;
          }

          .folder-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Photography;

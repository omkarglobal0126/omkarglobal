"use client";

import { useEffect, useState } from "react";

const sectorData = {
  "indian_export_sectors": [
    {
      "source_id": 1,
      "category": "HANDICRAFT & DECORATIVE PRODUCTS",
      "title": "Elevate Your Space with Authentic Indian Handicrafts & Decorative Items",
      "content": "Indian handicrafts are more than just products; they are a legacy of culture, skill, and soul. From the intricate carvings of Saharanpur to the vibrant pottery of Khurja, each piece tells a unique story of craftsmanship. Incorporating these into your home doesn't just add beauty—it brings a timeless, artistic character to your modern living space.",
      "key_highlights": {
        "why_choose": [
          "Timeless Aesthetic: Unlike mass-produced items, handmade home decor never goes out of style. Whether it's a brass Urlis or a hand-painted Pattachitra wall plate, these pieces blend seamlessly with both modern and traditional interiors.",
          "Eco-Friendly & Sustainable: Most Indian crafts use natural materials like clay, wood, jute, and brass. Choosing these eco-friendly decor items supports a sustainable lifestyle and reduces your carbon footprint.",
          "Unique Artistry: Since each product is crafted by hand, no two pieces are identical. You are essentially owning a one-of-a-kind masterpiece that reflects the rich heritage of Indian artisans.",
          "Durability & Quality: Artisans use seasoned wood and high-quality metals, ensuring that your decorative showpieces and furniture accents last for generations."
        ],
        "must_have_categories": [
          "Metalware & Brass Idols: Add a touch of royalty with hammered brass vases, lanterns, and traditional Dhokra art.",
          "Wooden Wall Art: Hand-carved panels and mirrors that serve as the perfect focal point for your living room.",
          "Ceramics & Pottery: Earthy terracotta planters and glazed ceramic dinnerware that bring a rustic charm to your table.",
          "Textiles & Furnishings: Handwoven jute rugs, silk cushion covers, and block-printed runners for a cozy, bohemian vibe."
        ]
      }
    },
    {
      "source_id": 2,
      "category": "GROCERY PRODUCTS",
      "title": "Premium Spices and Organic Jaggery: The Essence of Purity",
      "content": "In the global grocery landscape, quality isn't just a standard—it's a promise. Our export division specializes in sourcing and delivering the finest spices and jaggery powder, bridging the gap between traditional heritage farms and the modern international kitchen.",
      "key_highlights": {
        "why_choose": [
          "Authentic Sourcing: We source our spices directly from the most fertile regions, ensuring that every batch retains its natural oils, pungent aroma, and vibrant colour.",
          "Pure Jaggery Powder: Our jaggery is processed without harsh chemicals or synthetic additives. It serves as a nutrient-dense, unrefined alternative to white sugar, perfect for the health-conscious global consumer.",
          "Stringent Quality Control: Every shipment undergoes rigorous testing to meet international food safety standards, ensuring zero contaminants and consistent moisture levels.",
          "Sustainable & Ethical Practices: We prioritize fair-trade partnerships with local farmers, ensuring a transparent supply chain that supports sustainable agriculture.",
          "Advanced Packaging: To preserve shelf-life and potency, we use moisture-proof, food-grade packaging that survives long-transit maritime or air freight without losing freshness."
        ],
        "product_excellence": [
          "Spices: From the golden hue of high-curcumin Turmeric to the sharp bite of premium Black Pepper, our spices are graded for maximum flavour profile.",
          "Jaggery: Our free-flowing Jaggery powder is prized for its high mineral content and ease of use in both industrial food production and home baking."
        ],
        "partner_with_us": "We understand the nuances of the global grocery supply chain. Whether you are a retailer, wholesaler, or food manufacturer, we provide the consistency, volume, and purity your brand deserves. Elevate your inventory with the authentic taste of tradition."
      }
    },
    {
      "source_id": 3,
      "category": "GRAINS & CEREALS",
      "title": "Discover the Nutritional Powerhouse of Indian Grains and Cereals",
      "content": "India's agricultural landscape is a vibrant mosaic of ancient traditions and superfoods that have sustained generations. While many associate Indian staples solely with wheat, the true nutritional wealth of the subcontinent lies in its diverse array of indigenous grains and millets. These 'miracle grains' are not only gluten-free and nutrient-dense but are also eco-friendly, requiring minimal water to thrive.",
      "key_highlights": {
        "superstars_of_indian_grains": [
          "Finger Millet (Ragi): A calcium powerhouse, Ragi is essential for bone health and is a popular weaning food for infants across Southern India.",
          "Pearl Millet (Bajra): Traditionally consumed in the arid regions of Rajasthan and Gujarat, Bajra is rich in magnesium and iron, making it perfect for sustained energy.",
          "Sorghum (Jowar): This hardy grain is a digestive hero. High in dietary Fiber and antioxidants, Jowar is an excellent substitute for those seeking a gluten-free lifestyle.",
          "Basmati & Indigenous Rice Varieties: Beyond the world-famous aromatic Basmati, India offers unique grains like Black Rice and Red Rice, packed with anthocyanins and minerals.",
          "Premium Non-Basmati Rice for Global Markets: Sourced from trusted Indian farms, our non-basmati rice offers superior quality, rich taste, and consistent grains. Ideal for bulk export, food service, and daily consumption worldwide."
        ],
        "why_choose_indian_grains": "Choosing Indian grains means opting for sustainability and wellness. These cereals are naturally resilient to climate change and are often grown using traditional organic methods. Whether you are preparing a savory porridge, a fluffy pilaf, or a crispy flatbread, these grains provide a nutty flavour profile and a superior nutritional punch compared to processed alternatives. By embracing these ancient grains, you aren't just eating—you're participating in a legacy of health that dates back thousands of years."
      }
    },
    {
      "source_id": 4,
      "category": "FURNITURE PRODUCTS",
      "title": "Premium Indian Home & Office Furniture",
      "content": "Transform your living and workspaces with furniture that reflects modern Indian sensibilities. Whether you are furnishing a high-rise apartment in Mumbai or a collaborative startup hub in Bengaluru, our collection blends traditional craftsmanship and modern technology with smart, space-saving solutions. At this time, the trend shifts toward 'Japandi Maximalism'—a blend of Japanese minimalism and Scandinavian comfort, infused with Indian textures.",
      "key_highlights": {
        "home_segments": [
          "Living Room Essentials: Discover curved sectional sofas and solid Sheesham wood coffee tables that anchor your space.",
          "Bedroom Sanctuaries: Our hydraulic storage beds and upholstered headboards maximize utility without compromising on the 'spa-like' aesthetic.",
          "Smart Dining: Explore extendable dining tables crafted from premium Teak, perfect for intimate family dinners or festive gatherings."
        ],
        "office_segments": [
          "Ergonomic Excellence: High-back mesh chairs with lumbar support and height-adjustable desks are essential for long-term spinal health.",
          "Modular Workstations: Scalable desk systems and acoustic partitions allow your office to grow as your team does.",
          "Tech-Integrated Desks: Stay connected with built-in wireless charging pads and hidden cable management systems."
        ],
        "why_choose": [
          "Eco-Friendly Materials: We prioritize reclaimed wood and low-chemical finishes for a healthier home.",
          "Customization: Tailor fabrics and finishes to match your unique interior palette.",
          "Durability: Every piece is built to withstand the Indian climate, ensuring your investment lasts for generations."
        ]
      }
    },
    {
      "source_id": 5,
      "category": "FRUITS",
      "title": "The Ultimate Guide to India's Premium Fruit Harvest",
      "content": "India stands as a global leader in horticulture, ranking as the second-largest producer of fruits worldwide. From the sun-drenched plains to the cool Himalayan foothills, the country's diverse agro-climatic zones ensure a year-round supply of high-quality, nutrient-dense produce.",
      "key_highlights": {
        "why_indian_fruits_lead": [
          "Diverse Varieties: India cultivates a staggering range of tropical, sub-tropical, and temperate fruits, offering unique flavour profiles and textures.",
          "Nutritional Powerhouses: Rich in antioxidants, Vitamin C, and essential minerals, these fruits are staples in a health-conscious lifestyle.",
          "Global Export Standards: Modern farming practices and APEDA-certified quality controls ensure that the produce meets international phytosanitary and safety standards.",
          "Sustainable Sourcing: With an increasing shift toward organic farming, Indian produce is becoming a preferred choice for eco-conscious consumers."
        ],
        "seasonality_and_availability": [
          "Summer Gems (March–June): Known for hydrating properties and high sugar content, summer harvests dominate the global export market.",
          "Monsoon & Winter Harvests: As temperatures drop, the focus shifts to citrus-rich varieties and fiber-dense fruits that support immunity and metabolic health."
        ],
        "health_and_culinary_benefits": [
          "Immune Support: Many varieties provide over 100% of the daily recommended Vitamin C intake.",
          "Digestive Wellness: High Fiber content and natural enzymes aid in gut health and weight management.",
          "Culinary Versatility: Beyond fresh consumption, these fruits are widely used in juices, purees, and the global confectionery industry."
        ]
      }
    },
    {
      "source_id": 6,
      "category": "COSMETIC PRODUCTS",
      "title": "The Future of Indian Beauty: From Glow to Skin Longevity",
      "content": "At this time, the Indian beauty industry is evolving rapidly. The focus has moved beyond temporary glow and quick-fix solutions to a more advanced concept known as SkinSpan—which emphasizes long-term skin health, cellular repair, and barrier protection. Modern Indian consumers are now more aware and conscious about what they apply to their skin. Instead of traditional fairness creams, they prefer scientifically formulated products that support the skin's microbiome, strengthen the skin barrier, and work effectively in India's tropical climate.",
      "key_highlights": {
        "why_gaining_global_attention": "The new wave of Indian beauty combines the power of ancient Ayurvedic ingredients with modern dermatological science. Traditional ingredients like Saffron (Kesar), Bakuchiol, Turmeric, and Bhringraj are now being paired with clinically proven actives such as Niacinamide, Ceramides, Peptides, and Fermented Hyaluronic Acid. This balanced approach ensures that skincare products deliver both natural nourishment and high-performance results.",
        "trending_skincare_solutions": [
          "Pigmentation & Glow: Stable Vitamin C serums combined with Licorice extract help reduce pigmentation and protect skin from pollution damage.",
          "Barrier Repair & Hydration: Ceramide-based moisturizers and probiotic-infused cushion foundations with SPF 50 save time while protecting against UV rays and environmental stress.",
          "Daily Routine Essentials: Ubtan-inspired cleanser for daily detox and a peptide-rich night cream for cellular repair maintain a strong, balanced, and radiant skin barrier."
        ],
        "eco_friendly_and_sustainable_beauty": "Sustainability is a major trend shaping the future of Indian cosmetics. Many Indian brands are now adopting waterless formulations, recyclable packaging, and upcycled botanical ingredients. This eco-conscious approach allows consumers to maintain healthy skin while protecting the environment.",
        "secret_to_healthy_skin": "The future of skincare is not about chasing trends but focusing on skin longevity and resilience. Simple routines suited for India's diverse climate conditions help maintain a strong, balanced, and radiant skin barrier."
      }
    },
    {
      "source_id": 7,
      "category": "KITCHENWARE AND CUTLERY PRODUCTS",
      "title": "Premium Indian Kitchenware & Cutlery: The Heart of Every Modern Kitchen",
      "content": "India's kitchenware and cutlery industry is a perfect blend of traditional heritage and modern innovation. As the market grows towards an estimated $11 billion by 2033, all consumers are shifting toward durable, health-conscious, and aesthetically pleasing products. Whether you are a home cook or a professional chef, choosing the right tools is essential for a seamless culinary experience.",
      "key_highlights": {
        "key_trends_and_insights": [
          "The Rise of Tri-Ply Technology: Modern Indian households are moving away from simple aluminium to Tri-Ply stainless steel. This material features an aluminium core sandwiched between two layers of food-grade steel, ensuring even heat distribution and preventing food from burning.",
          "Eco-Friendly & Sustainable Choices: With a growing focus on health, there is a massive surge in demand for cast iron, copper, and brass utensils. These materials are not only sustainable but also add essential minerals to the food naturally.",
          "Smart & Space-Saving Designs: As urban kitchens become more compact, modular and stackable kitchenware—such as nested bowls and multi-functional pressure cookers—are becoming the top choice for city dwellers."
        ],
        "why_invest_in_quality": [
          "Durability: Premium Indian stainless steel (Grade 304) is designed to last a lifetime, resisting dents and scratches even with heavy daily use.",
          "Health & Safety: Unlike cheap plastic or degrading non-stick coatings, high-quality steel and cast iron are non-reactive and 100% toxin-free.",
          "Induction Compatibility: Most modern Indian cookware is now designed with a magnetic base, making it versatile for both gas stoves and induction cooktops."
        ]
      }
    },
    {
      "source_id": 8,
      "category": "TEXTILE AND APPAREL",
      "title": "Leading the Way in Indian Textile and Apparel Industry",
      "content": "As a premier hub for global textile sourcing, India continues to dominate the international market with its rich heritage and modern manufacturing capabilities. Our commitment to quality and innovation makes us a preferred partner for brands seeking sustainable apparel and high-grade fabrics.",
      "key_highlights": {
        "why_source_from_india": [
          "Diverse Product Portfolio: From organic cotton garments and luxurious mulberry silk to high-performance technical textiles, India offers an end-to-end value chain. Whether you need ready-made garments (RMG) or specialized industrial fabrics, we provide unmatched variety.",
          "Sustainable & Eco-friendly Manufacturing: Aligning with the Tex-Eco Initiative, our production processes prioritize water recycling, low-impact dyeing, and recycled polyester to meet global ESG standards.",
          "World-Class Infrastructure: With the rise of PM MITRA textile parks, India has scaled its production capacity, ensuring shorter lead times and competitive pricing for bulk exports to the US, EU, and Middle East.",
          "Artisanal Craftsmanship Meets AI: We blend traditional techniques like handloom weaving and intricate embroidery with Industry 4.0 technologies, including AI-driven quality control and digital textile printing.",
          "Global Compliance & Certifications: Our facilities adhere to international benchmarks, ensuring all Indian apparel exports are ethically produced and vertically integrated for maximum transparency."
        ],
        "future_vision": "The Indian textile industry is projected to reach $350 billion by 2030. By choosing Indian-made products, you are investing in a legacy of excellence, a skilled workforce of over 45 million experts, and a future-ready supply chain."
      }
    },
    {
      "source_id": 9,
      "category": "VEGETABLES",
      "title": "India's Vegetable Sector: A Global Powerhouse of Freshness and Quality",
      "content": "India stands as the world's second-largest producer of horticultural crops, offering an unparalleled variety of fresh produce to the global market. With its diverse agro-climatic zones, the country ensures a year-round supply of high-quality agricultural goods that meet international safety and nutrition standards.",
      "key_highlights": {
        "key_advantages": [
          "Year-Round Availability: Thanks to a wide range of climates—from the Himalayan foothills to the tropical south—India can cultivate a massive variety of produce in every season, ensuring a consistent supply chain for global buyers.",
          "Global Export Hub: India is a top-tier exporter to major markets, including the USA, UAE, UK, and Germany. The sector is backed by robust government initiatives like APEDA, which ensures products adhere to strict global phytosanitary standards.",
          "Superior Quality & Nutritional Value: Indian agricultural practices prioritize the richness of soil and natural cultivation methods, resulting in produce that is visually appealing and packed with essential vitamins and minerals.",
          "Advanced Supply Chain: Significant investments in cold-chain logistics and traceability technology (like QR-coded packaging) mean that products reach international shores with their 'just-harvested' freshness intact.",
          "Rising Organic Prowess: India is rapidly expanding its certified organic farming areas. For businesses looking for pesticide-free and sustainably sourced products, India is the premier destination for high-value organic exports.",
          "Competitive Pricing: The combination of traditional farming expertise and modern economies of scale allows India to offer premium quality at highly competitive prices compared to other global suppliers."
        ],
        "why_our_network": "By leveraging India's vast production base, we bridge the gap between local farmers and global demand. Our commitment to quality assurance, sustainable sourcing, and timely delivery makes us the ideal partner for your bulk agricultural needs."
      }
    },
    {
      "source_id": 10,
      "category": "IMITATION JEWELLERY AND PRECIOUS STONES",
      "title": "Exquisite Indian Imitation Jewellery & Precious Stones: The Ultimate Guide",
      "content": "India is globally renowned as the heart of the jewellery industry, blending centuries-old traditions with modern innovation. Whether you are looking for affordable bridal sets or ethically sourced semi-precious stones, the Indian market offers unmatched variety and craftsmanship.",
      "key_highlights": {
        "why_choose_imitation_jewellery": [
          "Superior Craftsmanship: From the intricate Kundan and Polki designs of Rajasthan to the temple jewellery of South India, every piece reflects a rich cultural heritage.",
          "Cost-Effective Elegance: Get the 'million-dollar look' at a fraction of the price. High-quality base metals and premium plating ensure long-lasting shine that rivals real gold.",
          "Trend-Responsive Designs: The Indian market moves fast. You can find the latest celebrity-inspired jewellery and contemporary minimalist designs that cater to global fashion shifts.",
          "Durability and Variety: Unlike fine jewellery, imitation pieces are lightweight and designed for diverse occasions—from daily office wear to grand wedding festivities."
        ],
        "precious_and_semi_precious_stones": [
          "Global Export Hub: India, particularly Jaipur, dominates the market in cut and polished diamonds and a vast array of coloured gemstones like Emeralds, Rubies, and Sapphires.",
          "Astrological Significance: We offer a wide range of certified Navratna stones, catering to those seeking gemstones for planetary alignment and wellness.",
          "Customization: Access bespoke services where stones are precision-cut to fit your unique design requirements, ensuring your jewellery is truly one-of-a-kind."
        ],
        "why_choose_us": "Our collection brings the best of India's artisanal excellence directly to your doorstep. We prioritize quality-checked materials, ethical sourcing, and global shipping, making us a trusted partner for retailers and individual collectors worldwide."
      }
    },
    {
      "source_id": 11,
      "category": "COPPER PRODUCTS",
      "title": "Unlock Wellness with Premium Copper Bottles and Jugs",
      "content": "In a world moving toward sustainable living, pure copper water bottles and hand-hammered copper jugs have become the ultimate lifestyle essentials. Beyond their timeless aesthetic, these vessels offer a natural way to alkalize your water and boost your daily vitality.",
      "key_highlights": {
        "why_switch_to_copper_drinkware": [
          "Natural Antimicrobial Properties: According to Ayurveda and modern science, copper creates an oligodynamic effect, naturally eliminating harmful bacteria and making water safer to drink.",
          "Boosts Immunity & Digestion: Storing water in a copper pitcher overnight helps stimulate the digestive system and strengthens the body's natural defence mechanisms.",
          "Anti-Aging & Skin Health: Copper is a powerful antioxidant that aids in melanin production and cell regeneration, giving you a healthy, radiant glow.",
          "Eco-Friendly Choice: Say goodbye to single-use plastics. Our 100% pure copper bottles are durable, recyclable, and designed to last a lifetime."
        ],
        "tips_for_maximum_benefits": [
          "The Overnight Rule: For the best results, store water in your copper jug for 6–8 hours to allow the copper ions to infuse properly.",
          "Room Temperature Only: Copper is highly reactive. Use your bottle only for plain, room-temperature water—avoid acidic drinks like juices or tea.",
          "Easy Maintenance: Keep your bottle shining by cleaning it with a simple mix of lemon and salt or tamarind paste to remove natural oxidation."
        ],
        "choose_quality_you_can_trust": "Whether you are looking for a leak-proof copper gym bottle or an elegant hammered copper carafe for your dining table, our collection combines traditional craftsmanship with modern ergonomics. Invest in your health today and experience the difference of authentic hydration."
      }
    }
  ]
};

export default function ProductGrid({ subCategory }) {
  const [products, setProducts] = useState([]);

 const categoryMap = {
  "Handicrafts & Decorative": "HANDICRAFT & DECORATIVE PRODUCTS",
  "Textiles & Apparel": "TEXTILE AND APPAREL",
  "Beauty Products": "COSMETIC PRODUCTS",
  "Imitation Jewellery": "IMITATION JEWELLERY AND PRECIOUS STONES",
  "Kitchenware & Cutlery": "KITCHENWARE AND CUTLERY PRODUCTS"
};

// Component ke andar aise use karein:
const mappedCategory = categoryMap[subCategory] || subCategory;

const info = sectorData.indian_export_sectors.find(
  (s) => s.category.toLowerCase() === mappedCategory?.toLowerCase()
);

  useEffect(() => {
    if (subCategory) {
      fetch(`/api/products/subcategory/${encodeURIComponent(subCategory)}`)
        .then((res) => res.json())
        .then(setProducts)
        .catch((err) => console.error("Error fetching products:", err));
    }
  }, [subCategory]);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
          {info ? info.title : subCategory}
        </h1>
        {info && (
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {info.content}
          </p>
        )}
      </div>

      {/* Dynamic Key Highlights Section */}
      {info?.key_highlights && (
        <div className="mb-20 space-y-10">
          <div className="flex items-center gap-4">
            <div className="h-px bg-orange-200 flex-1"></div>
            <h2 className="text-2xl font-bold text-orange-600 uppercase tracking-widest">Sector Insights</h2>
            <div className="h-px bg-orange-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(info.key_highlights).map(([key, value]) => (
              <div key={key} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm transition-all hover:shadow-md">
                <h3 className="text-sm font-black text-orange-500 uppercase mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  {key.replace(/_/g, " ")}
                </h3>

                {Array.isArray(value) ? (
                  <ul className="space-y-3">
                    {value.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-3 text-sm leading-snug">
                        <span className="text-orange-400">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-sm italic border-l-2 border-orange-200 pl-4">
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Available Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-50">
              <img
                src={p.images?.[0] || "/placeholder.jpg"}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-6">
              <h3 className="font-bold text-gray-900 text-xl mb-3">{p.name}</h3>
              <div className="h-1 w-12 bg-orange-500 mb-4 rounded-full"></div>
              <ul className="text-sm text-gray-600 space-y-2">
                {p.items?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {!products.length && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-xl font-medium">
            Fetching the latest inventory for this sector...
          </p>
        </div>
      )}
    </section>
  );
}
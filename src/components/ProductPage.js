import React, {
	useState,
	useEffect,
} from "react";
import "./ProductPage.css";
import { RiShoppingBag3Fill } from "react-icons/ri";
import RatingStars from "./RatingStars";
import ShoppingCart from "./ShoppingCart";
import { Link } from 'react-router-dom';

const products = [
	{
		id: 1,
		name: "Travis Scott x Air Jordan 1 Low OG PS 'Olive'",
		rating: 4.7,
		description:
			"The Travis Scott x Air Jordan 1 Low OG PS 'Olive' is a limited-edition sneaker collaboration between Travis Scott and Nike's Air Jordan brand.",
		longdetails: 'The Travis Scott x Air Jordan 1 Low OG PS Olive is a collaboration between American rapper Travis Scott and the Jordan Brand. The shoe features an olive and black upper with red accents on the tongue, insole, and outsole. The iconic Nike Swoosh is embroidered in black on the lateral side, while the medial side features the reverse Swoosh in red. Additional details include a white midsole, black outsole, and Cactus Jack branding on the tongue tag and heel. The shoe was released in 2019 and is highly sought after by sneaker enthusiasts.',
		price: 4000,
		image: require("./image/airjordan1.png"),
	},
	{
		id: 2,
		name: "New Balance 1906D 'Protection Pack - Harbor Grey'",
		rating: 3.5,
		description:
			"The New Balance 1906D 'Protection Pack - Harbor Grey' is a stylish and high-quality sneaker designed for everyday wear.",
		longdetails: 'The New Balance 1906D Protection Pack - Harbor Grey is a premium sneaker that pays homage to the brands rich heritage and craftsmanship. Featuring a sleek and stylish design, the 1906D boasts a premium leather upper in a stylish harbor grey colorway, accented by a clean white midsole and gum outsole for a classic look. Other features include a removable insole for added comfort, a leather lining, and a durable rubber outsole with traction pattern for reliable grip. The Protection Pack branding can be found on the tongue and insole of the shoe, highlighting its premium craftsmanship and attention to detail. Overall, the New Balance 1906D Protection Pack - Harbor Grey is a must-have for sneaker enthusiasts looking for a high-quality and stylish shoe that delivers on both comfort and style.',
		price: 886,
		image: require("./image/newbalance.png"),
	},
	{
		id: 3,
		name: "adidas Ultra 4D 'OG'",
		rating: 3.7,
		description:
			"The adidas Ultra 4D 'OG' is a sneaker that combines classic design elements with innovative technology.",
		longdetails: 'The adidas Ultra 4D OG is a modern take on the classic Ultra Boost silhouette, featuring a 3D-printed lattice midsole for enhanced cushioning and support. The shoes upper is constructed with a combination of Primeknit and synthetic materials in black and white, with hits of green on the heel counter and outsole. The OG colorway pays homage to the original Ultra Boost design with its black and white knit pattern and bright green accents. The adidas branding can be found on the tongue and heel tab, while the 4D branding is featured on the midsole.',
		price: 664,
		image: require("./image/Adidas.png"),
	},
	{
		id: 4,
		name: "Puma Thunder Spectra 'OG'",
		rating: 4.3,
		description:
			"The Puma Thunder Spectra 'OG' is a retro-inspired sneaker that features a bulky and chunky design, with a mix of leather, suede, and mesh materials on the upper.",
		longdetails: 'The Puma Thunder Spectra OG is a retro-inspired sneaker that combines chunky 90s-style design with modern comfort features. The shoe features a mix of suede, mesh, and leather on the upper, with bold color blocking in shades of black, white, and vibrant neon green. The midsole is chunky and heavily textured, adding to the shoes distinctive look and providing excellent cushioning and support. Other details include Puma branding on the tongue and heel, and a thick, rugged outsole for durability and traction. The Puma Thunder Spectra OG is a bold and stylish sneaker that is sure to turn heads.',
		price: 350,
		image: require("./image/puma.png"),
	},
	{
		id: 5,
		name: "Vans Old Skool 'Black White'",
		rating: 4.5,
		description:
			" The Vans Old Skool is a timeless design that has remained popular since its introduction in 1977.",
		longdetails: 'The Vans Old Skool Black White is a classic skate shoe that features a black suede and canvas upper with white accents on the iconic side stripe, laces, and stitching. The shoe also features a padded collar for added comfort and support, a reinforced toecap for durability, and the signature Vans waffle outsole for superior grip. The Old Skool is a timeless silhouette that has been a staple in the Vans lineup since its introduction in 1977, and continues to be a popular choice for skateboarding and casual wear.',
		price: 335,
		image: require("./image/vans.png"),
	},
	{
		id: 6,
		name: "Converse Chuck 70 Low Top 'Parchment'",
		rating: 3.8,
		description:
			"The Converse Chuck 70 Low Top 'Parchment' is a casual sneaker that features a classic, vintage look with a modern twist.",
		longdetails: 'The Converse Chuck 70 Low Top Parchment is a classic shoe that features a timeless design. The shoe is made from a durable canvas material that provides both comfort and durability. The Parchment colorway features a light beige color that is perfect for casual wear or for dressing up. The Chuck 70 Low Top has a low-cut silhouette that provides a sleek look, and a lace-up closure system that ensures a secure fit. The shoe also features a rubber toe cap that adds extra durability, and a rubber outsole that provides excellent traction on any surface. The Chuck 70 Low Top Parchment is perfect for anyone looking for a classic and stylish shoe that can be worn for any occasion. It pairs well with jeans, shorts, or even a casual dress, making it a versatile addition to any wardrobe.',
		price: 149,
		image: require("./image/converse.png"),
	},
	{
		id: 7,
		name: "Air Jordan 1 Retro High OG 'Origin Story' Special Box'",
		rating: 5,
		description:
			"The shoe features a red and black colorway inspired by the suit worn by Spider-Man in the 2018 film Spider-Man: Into the Spider-Verse.",
		longdetails: 'The Air Jordan 1 Retro High OG Origin Story Special Box is a limited edition sneaker that was released in December 2018 in collaboration with the animated film Spider-Man: Into the Spider-Verse. The shoe features a red and black colorway inspired by the costume of Miles Morales, the films protagonist. It also includes details like a 3M reflective upper, icy translucent outsole, and a comic book-inspired insole with artwork from the movie. The special box that comes with the shoes is designed to look like a comic book with a red and black color scheme, the Marvel logo, and Air Jordan branding. It also includes a red dust bag with the Air Jordan logo and a special edition Jordan keychain. This sneaker quickly became a fan favorite due to its unique design and limited availability. It is a must-have for any sneaker collector or fan of the movie.',
		price: 14232,
		image: require("./image/spiderman.png"),
	},
	{
		id: 8,
		name: "A Ma Maniére x Air Jordan 4 Retro 'Violet Ore'",
		rating: 4.8,
		description:
			"This special edition of the Air Jordan 4 features a premium suede upper in a rich Violet Ore colorway, with metallic silver accents on the eyelets and Jumpman logo.",
		longdetails: 'The A Ma Maniére x Air Jordan 4 Retro Violet Ore is a collaboration between Jordan Brand and A Ma Maniére, a high-end streetwear boutique based in Atlanta, Georgia. The shoe features a premium suede upper in a purple hue dubbed Violet Ore, complemented by hits of metallic silver on the eyelets, wings, and Jumpman branding. A quilted collar and white midsole with visible Air cushioning add comfort and support, while a translucent outsole finishes off the design. The A Ma Maniére x Air Jordan 4 Retro Violet Ore released in April 2021 and quickly became a highly sought-after release for sneakerheads and fans of the boutique alike.',
		price: 1564,
		image: require("./image/airjordan2.png"),
	}


];

function Product() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				 localStorage.getItem(
				 	"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});

	};

	

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<Link to="/"><img className="logo" src="shoestop.png" alt="ShoeStop Logo"></img></Link>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<RiShoppingBag3Fill size={30} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Sneakers
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								RM{product.price}
							</span>
							<div className="buttons">
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
								<Link to ={"/details/" + product.id} >
								<button className="btn" onClick={"/details/" + product.id}>Details</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</main>
			<small>Build by Nabil Ros &copy;</small>
		</div>
	);
}

export default Product; 
export {products};
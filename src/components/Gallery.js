const imageNames = ["car1.jpg", "car2.jpg", "car3.jpg"];

export function Gallery() {
	return (
		<div className="gallery-grid">
			{imageNames.map((name) => (
				<div key={name} className="gallery-item">
					<img
						// at dev time this becomes "/images/car1.jpg"
						// in production on GitHub Pages it becomes
						// "/smart-detailing/images/car1.jpg" (due to PUBLIC_URL)
						src={`${process.env.PUBLIC_URL}/images/${name}`}
						alt={`Detailed car: ${name}`}
					/>
				</div>
			))}
		</div>
	);
}

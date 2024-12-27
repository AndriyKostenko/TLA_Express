interface AboutSectionProps {
    className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({className}) => {
    return (
        <section className={className}>
            <h2>About Us</h2>
            <p>TLA Express Inc. is a delivery service partner with Amazon. We are a team of dedicated professionals who are committed to providing exceptional delivery services to our customers. Our goal is to ensure that your packages are delivered on time and with care. We take pride in our work and strive to exceed your expectations with every delivery. </p>
        </section>
    )
}
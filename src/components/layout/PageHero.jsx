import Container from "./Container";






const PageHero = ({ title, subtitle, backgroundImage }) =>
  <section className="relative min-h-[40vh] flex items-center text-white overflow-hidden py-20 md:py-24">
    {/* Background Image / Overlay */}
    <div className="absolute inset-0 z-0">
      {backgroundImage ? (
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-primary" />
      )}
      <div className="absolute inset-0 bg-black/75" /> {/* Cinematic Overlay */}
    </div>

    <Container className="relative z-10 text-center">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle &&
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        }
      </div>
    </Container>
  </section>;


export default PageHero;
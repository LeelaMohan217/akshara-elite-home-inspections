import Button from '../components/Button'
import Container from '../components/Container'

function NotFound() {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-description">
            The page you’re looking for doesn’t exist or may have moved.
          </p>
          <Button href="/" className="mt-8 inline-block">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default NotFound

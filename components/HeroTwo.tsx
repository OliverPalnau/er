import { FadeIn } from "./FadeIn";

export default function HeroTwo() {
  return (
    <div className="bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-medium tracking-tight text-black sm:text-5xl lg:text-6xl leading-tight">
            All-inclusive regulatory management services throughout your
            product’s entire lifecycle.
          </h2>
        </div>
      </FadeIn>
    </div>
  );
}

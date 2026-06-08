// Static hero background car. Uses a lightweight transparent PNG render
// (the heavy 3D model was replaced for performance + a cleaner look).
export default function CarScene() {
  return (
    <div className="bg-canvas">
      <img src="/hero-car.png" alt="" className="bg-car" aria-hidden="true" />
    </div>
  )
}

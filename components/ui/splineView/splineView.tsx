import Spline from '@splinetool/react-spline';
interface splineViewprops {
  className?: string;
}
export default function SplineView(props: splineViewprops) {
  return (
    <div className={props.className}>
      <Spline className="flex shrink min-h-max xl:max-h-auto w-auto"
        scene="https://prod.spline.design/fmNRvDbMadmfkZq1/scene.splinecode"
      />
    </div>

  );
}

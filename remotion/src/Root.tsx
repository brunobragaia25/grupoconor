import { Composition } from "remotion";
import { ComecarNegocio } from "./compositions/ComecarNegocio";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="ComecarNegocio"
        component={ComecarNegocio}
        durationInFrames={120}
        fps={30}
        width={486}
        height={486}
      />
    </>
  );
};

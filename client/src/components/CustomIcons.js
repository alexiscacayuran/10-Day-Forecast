import React from "react";
import { Tooltip } from "@mui/joy";
import { SvgIcon } from "@mui/material";

import Sunny from "../assets/icons/weather/0-sunny.svg";

import NoRainParCloudy from "../assets/icons/weather/1-no-rain_partly-cloudy.svg";
import NoRainMosCloudy from "../assets/icons/weather/2-no-rain_mostly-cloudy.svg";
import NoRainCloudy from "../assets/icons/weather/3-no-rain_cloudy.svg";

import LightRainsParCloudy from "../assets/icons/weather/4-light-rains_partly-cloudy.svg";
import LightRainsMosCloudy from "../assets/icons/weather/5-light-rains_mostly-cloudy.svg";
import LightRainsCloudy from "../assets/icons/weather/6-light-rains_cloudy.svg";

import ModRainsParCloudy from "../assets/icons/weather/7-mod-rains_partly-cloudy.svg";
import ModRainsMosCloudy from "../assets/icons/weather/8-mod-rains_mostly-cloudy.svg";
import ModRainsCloudy from "../assets/icons/weather/9-mod-rains_cloudy.svg";

import HeavyRainsParCloudy from "../assets/icons/weather/10-heavy-rains_partly-cloudy.svg";
import HeavyRainsMosCloudy from "../assets/icons/weather/11-heavy-rains_mostly-cloudy.svg";
import HeavyRainsCloudy from "../assets/icons/weather/12-heavy-rains_cloudy.svg";

import { ReactComponent as N } from "../assets/icons/wind-direction/0-n.svg";
import { ReactComponent as NNE } from "../assets/icons/wind-direction/1-nne.svg";
import { ReactComponent as NE } from "../assets/icons/wind-direction/2-ne.svg";
import { ReactComponent as ENE } from "../assets/icons/wind-direction/3-ene.svg";

import { ReactComponent as E } from "../assets/icons/wind-direction/4-e.svg";
import { ReactComponent as ESE } from "../assets/icons/wind-direction/5-ese.svg";
import { ReactComponent as SE } from "../assets/icons/wind-direction/6-se.svg";
import { ReactComponent as SSE } from "../assets/icons/wind-direction/7-sse.svg";

import { ReactComponent as S } from "../assets/icons/wind-direction/8-s.svg";
import { ReactComponent as SSW } from "../assets/icons/wind-direction/9-ssw.svg";
import { ReactComponent as SW } from "../assets/icons/wind-direction/10-sw.svg";
import { ReactComponent as WSW } from "../assets/icons/wind-direction/11-wsw.svg";

import { ReactComponent as W } from "../assets/icons/wind-direction/12-w.svg";
import { ReactComponent as WNW } from "../assets/icons/wind-direction/13-wnw.svg";
import { ReactComponent as NW } from "../assets/icons/wind-direction/14-nw.svg";
import { ReactComponent as NNW } from "../assets/icons/wind-direction/15-nnw.svg";

import { ReactComponent as TMax } from "../assets/icons/buttons/tmax.svg";
import { ReactComponent as TMean } from "../assets/icons/buttons/tmean.svg";
import { ReactComponent as TMin } from "../assets/icons/buttons/tmin.svg";

import { ReactComponent as LayerStyle } from "../assets/icons/buttons/layer-style.svg";
import { ReactComponent as Gradient } from "../assets/icons/buttons/gradient.svg";
import { ReactComponent as Particles } from "../assets/icons/buttons/particles.svg";

import BMUVIK from "../assets/logo/bmuv-iki-logo.png";
import GIZ from "../assets/logo/giz-logo.png";

const ImgWrapper = ({ Icon, Title, ...props }) => (
  <Tooltip title={Title} color="primary" placement="bottom" variant="soft">
    <img src={Icon} {...props} style={{ width: "32px" }}></img>
  </Tooltip>
);

const SvgWrapper = ({ Icon, ...props }) => (
  <SvgIcon {...props} style={{ width: "20px" }}>
    <Icon />
  </SvgIcon>
);

export const GIZLogo = (props) => (
  <img src={GIZ} {...props} style={{ width: "100px", margin: "-25px 0" }}></img>
);

export const BMUVIKILogo = (props) => (
  <img src={BMUVIK} {...props} style={{ width: "200px" }}></img>
);

export const LayerStyleIcon = (props) => (
  <SvgIcon {...props}>
    <LayerStyle />
  </SvgIcon>
);

export const GradientIcon = (props) => (
  <SvgIcon {...props}>
    <Gradient />
  </SvgIcon>
);

export const ParticlesIcon = (props) => (
  <SvgIcon {...props}>
    <Particles />
  </SvgIcon>
);

export const TMaxIcon = (props) => (
  <SvgIcon {...props}>
    <TMax />
  </SvgIcon>
);
export const TMeanIcon = (props) => (
  <SvgIcon {...props}>
    <TMean />
  </SvgIcon>
);
export const TMinIcon = (props) => (
  <SvgIcon {...props}>
    <TMin />
  </SvgIcon>
);

export const SunnyIcon = (props) => (
  <ImgWrapper Icon={Sunny} Title={<>Sunny</>} {...props} />
);

export const NoRainParCloudyIcon = (props) => (
  <ImgWrapper
    Icon={NoRainParCloudy}
    Title={
      <>
        No Rain
        <br />
        Partly Cloudy
      </>
    }
    {...props}
  />
);
export const NoRainMosCloudyIcon = (props) => (
  <ImgWrapper
    Icon={NoRainMosCloudy}
    Title={
      <>
        No Rain
        <br />
        Mostly Cloudy
      </>
    }
    {...props}
  />
);
export const NoRainCloudyIcon = (props) => (
  <ImgWrapper
    Icon={NoRainCloudy}
    Title={
      <>
        No Rain
        <br />
        Cloudy
      </>
    }
    {...props}
  />
);

export const LightRainsParCloudyIcon = (props) => (
  <ImgWrapper
    Icon={LightRainsParCloudy}
    Title={
      <>
        Light Rains
        <br />
        Partly Cloudy
      </>
    }
    {...props}
  />
);
export const LightRainsMosCloudyIcon = (props) => (
  <ImgWrapper
    Icon={LightRainsMosCloudy}
    Title={
      <>
        Light Rains
        <br />
        Mostly Cloudy
      </>
    }
    {...props}
  />
);
export const LightRainsCloudyIcon = (props) => (
  <ImgWrapper
    Icon={LightRainsCloudy}
    Title={
      <>
        Light Rains
        <br />
        Cloudy
      </>
    }
    {...props}
  />
);

export const ModRainsParCloudyIcon = (props) => (
  <ImgWrapper
    Icon={ModRainsParCloudy}
    Title={
      <>
        Moderate Rains
        <br />
        Partly Cloudy
      </>
    }
    {...props}
  />
);
export const ModRainsMosCloudyIcon = (props) => (
  <ImgWrapper
    Icon={ModRainsMosCloudy}
    Title={
      <>
        Moderate Rains
        <br />
        Mostly Cloudy
      </>
    }
    {...props}
  />
);
export const ModRainsCloudyIcon = (props) => (
  <ImgWrapper
    Icon={ModRainsCloudy}
    Title={
      <>
        Moderate Rains
        <br />
        Cloudy
      </>
    }
    {...props}
  />
);

export const HeavyRainsParCloudyIcon = (props) => (
  <ImgWrapper
    Icon={HeavyRainsParCloudy}
    Title={
      <>
        Heavy Rains
        <br />
        Partly Cloudy
      </>
    }
    {...props}
  />
);
export const HeavyRainsMosCloudyIcon = (props) => (
  <ImgWrapper
    Icon={HeavyRainsMosCloudy}
    Title={
      <>
        Heavy Rains
        <br />
        Mostly Cloudy
      </>
    }
    {...props}
  />
);
export const HeavyRainsCloudyIcon = (props) => (
  <ImgWrapper
    Icon={HeavyRainsCloudy}
    Title={
      <>
        Heavy Rains
        <br />
        Cloudy
      </>
    }
    {...props}
  />
);

export const NIcon = (props) => <SvgWrapper Icon={N} {...props} />;
export const NNEIcon = (props) => <SvgWrapper Icon={NNE} {...props} />;
export const NEIcon = (props) => <SvgWrapper Icon={NE} {...props} />;
export const ENEIcon = (props) => <SvgWrapper Icon={ENE} {...props} />;

export const EIcon = (props) => <SvgWrapper Icon={E} {...props} />;
export const ESEIcon = (props) => <SvgWrapper Icon={ESE} {...props} />;
export const SEIcon = (props) => <SvgWrapper Icon={SE} {...props} />;
export const SSEIcon = (props) => <SvgWrapper Icon={SSE} {...props} />;

export const SIcon = (props) => <SvgWrapper Icon={S} {...props} />;
export const SSWIcon = (props) => <SvgWrapper Icon={SSW} {...props} />;
export const SWIcon = (props) => <SvgWrapper Icon={SW} {...props} />;
export const WSWIcon = (props) => <SvgWrapper Icon={WSW} {...props} />;

export const WIcon = (props) => <SvgWrapper Icon={W} {...props} />;
export const WNWIcon = (props) => <SvgWrapper Icon={WNW} {...props} />;
export const NWIcon = (props) => <SvgWrapper Icon={NW} {...props} />;
export const NNWIcon = (props) => <SvgWrapper Icon={NNW} {...props} />;

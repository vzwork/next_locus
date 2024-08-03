import * as React from "react";
import { styled, useThemeProps } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

export interface ButtonChannelProps {
  name: string;
  img: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  // image later
  variant?: "outlined";
}

// export interface StatProps {
//   value: number | string;
//   unit: string;
//   variant?: 'outlined';
// }

interface StateButtonChannelOwner extends ButtonChannelProps {
  // …key value pairs for the internal state that you want to style the slot
  // but don't want to expose to the users
}

// interface StatOwnerState extends StatProps {
//   // …key value pairs for the internal state that you want to style the slot
//   // but don't want to expose to the users
// }

const ButtonChannelRoot = styled("a", {
  name: "MuiButtonChannel",
  slot: "root",
})<{ ownerState: StateButtonChannelOwner }>(({ theme, ownerState }) => ({
  position: "relative",
  overflow: "hidden",
  // width: "200px",
  // height: "min-content",
  display: "flex",
  flexDirection: "column",
  // gap: theme.spacing(0.5),
  // padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "1rem",
  // boxShadow: theme.shadows[2],
  // letterSpacing: "-0.025em",
  // fontWeight: 600,
  ...(ownerState.variant === "outlined" && {
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
}));

// const StatRoot = styled('div', {
//   name: 'MuiStat',
//   slot: 'root',
// })<{ ownerState: StatOwnerState }>(({ theme, ownerState }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(0.5),
//   padding: theme.spacing(3, 4),
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[2],
//   letterSpacing: '-0.025em',
//   fontWeight: 600,
//   ...(ownerState.variant === 'outlined' && {
//     border: `2px solid ${theme.palette.divider}`,
//     boxShadow: 'none',
//   }),
// }));

const ButtonChannelImage = styled("div", {
  name: "MuiButtonChannel",
  slot: "image",
})<{ ownerState: StateButtonChannelOwner }>(({ theme }) => ({
  width: 200,
  height: 70,
  position: "relative",
  zIndex: 0,
  // backgroundColor: theme.palette.primary.main,
}));

// const StatValue = styled('div', {
//   name: 'MuiStat',
//   slot: 'value',
// })<{ ownerState: StatOwnerState }>(({ theme }) => ({
//   ...theme.typography.h3,
// }));

const ButtonChannelName = styled("div", {
  name: "MuiButtonChannel",
  slot: "name",
})<{ ownerState: StateButtonChannelOwner }>(({ theme }) => ({
  ...theme.typography.body1,
  position: "absolute",
  width: "100%",
  bottom: 0,
  left: 0,
  // width: "100%",
  // height: "100%",
  color: "white",
  padding: theme.spacing(1),
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 50%)",

  // color: theme.palette.text.primary,
}));

// const StatUnit = styled('div', {
//   name: 'MuiStat',
//   slot: 'unit',
// })<{ ownerState: StatOwnerState }>(({ theme }) => ({
//   ...theme.typography.body2,
//   color: theme.palette.text.secondary,
// }));

export const ButtonChannel = React.forwardRef<
  HTMLAnchorElement,
  ButtonChannelProps
>(function ButtonChannel(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: "MuiButtonChannel" });
  const { name, img, href, ...other } = props;

  const ownerState = { ...props };

  return (
    <Link href={href} passHref legacyBehavior>
      <ButtonChannelRoot ref={ref} ownerState={ownerState} {...other}>
        <ButtonChannelImage ownerState={ownerState}>
          <Image
            src={img}
            alt={name}
            priority={true}
            fill
            style={{ objectFit: "cover" }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </ButtonChannelImage>
        <ButtonChannelName ownerState={ownerState}>
          {name}
        </ButtonChannelName>
      </ButtonChannelRoot>
    </Link>
  );
});

// const Stat = React.forwardRef<HTMLDivElement, StatProps>(
//   function Stat(inProps, ref) {
//     const props = useThemeProps({ props: inProps, name: 'MuiStat' });
//     const { value, unit, variant, ...other } = props;

//     const ownerState = { ...props, variant };

//     return (
//       <StatRoot ref={ref} ownerState={ownerState} {...other}>
//         <StatValue ownerState={ownerState}>{value}</StatValue>
//         <StatUnit ownerState={ownerState}>{unit}</StatUnit>
//       </StatRoot>
//     );
//   },
// );

// export default function StatFullTemplate() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Stat value="1.9M" unit="Favorites" />
//       <Stat value="5.1M" unit="Views" variant="outlined" />
//     </Stack>
//   );
// }

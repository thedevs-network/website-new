/** @jsx jsx */
import { jsx, Flex, Heading } from "theme-ui";

import { SingleUser } from "./Icons";
import { SubscribeButton } from "./Button";
import { groups } from "../consts";

const Group = (props: typeof groups[number]) => {
  return (
    <Flex
      key={props.title}
      sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
    >
      <Flex sx={{ flex: "1 1 auto", alignItems: "flex-start" }}>
        <Flex
          sx={{
            flex: "0 0 auto",
            position: "relative",
            overflow: "hidden",
            borderRadius: "100%",
            backgroundColor: "muted.1",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid",
            borderColor: "muted.1",
            img: {
              width: "47px",
              height: "47px",
              borderRadius: "100%",
            },
          }}
        >
          <img src={props.image} alt={props.title} />
        </Flex>
        <Flex sx={{ flexDirection: "column", ml: "12px", mt: 1 }}>
          <Heading
            as="h4"
            sx={{
              fontWeight: "medium",
              fontSize: props.title.length > 14 ? 1 : 2,
            }}
          >
            {props.title.length > 14
              ? `${props.title.slice(0, 14)}..`
              : props.title}
          </Heading>
          <Flex
            sx={{
              alignItems: "center",
              mt: 1,
              svg: {
                width: "12px",
                height: "auto",
                color: "muted.4",
                mb: "2px",
              },
            }}
          >
            <SingleUser />
            <span sx={{ ml: 1, color: "muted.4", fontSize: 1 }}>
              +{props.members}
            </span>
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={{ mt: 2 }}>
        <SubscribeButton
          title={props.title}
          path={props.path}
          showSubscribeText={false}
        />
      </Flex>
    </Flex>
  );
};

export default Group;

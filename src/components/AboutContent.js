import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function AboutContent() {
  return (
    <>
      <div>
        <div className="bg-container">
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: 32,
              textAlign: "center",
              padding: "5px",
              textDecoration: "underline",
            }}
          >
            About One3Media
          </Typography>
          <Container
            maxWidth="xl"
            sx={{
              bgcolor: "grey",
              color: "white",
              height: "100%",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "medium",
                fontSize: 18,
                textAlign: "center",
                padding: "25px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet luctus purus, in convallis tortor. Nam sodales aliquam
              elit, at condimentum magna sollicitudin et. Aliquam erat volutpat.
              Nunc eget nibh sit amet justo blandit egestas sed vel orci. Nulla
              quis enim et ipsum egestas vulputate non sed erat. Vivamus
              eleifend pellentesque diam eget facilisis. Aenean at mauris ac
              libero suscipit blandit sit amet sit amet metus. Nullam pulvinar
              gravida tortor, hendrerit fringilla metus congue in. Pellentesque
              non sem in ante rhoncus tempus. Ut sed lacinia velit. Aenean
              vestibulum elit et rutrum bibendum. Vestibulum at iaculis odio.
              Sed sit amet neque massa. Nulla malesuada efficitur elit, vel
              hendrerit enim feugiat ac. Aenean iaculis ipsum ac fermentum
              condimentum. Nulla id tincidunt risus, at auctor arcu. Proin sit
              amet risus sit amet tellus volutpat accumsan. Quisque lectus
              magna, vulputate non rhoncus in, consectetur id est. Sed sodales
              congue elit, at suscipit sapien viverra id. Vestibulum eget urna
              hendrerit, facilisis massa non, ultrices diam. Etiam convallis
              maximus sagittis. Pellentesque eu vehicula nisl, vitae vestibulum
              lorem. Vestibulum rutrum auctor tellus vel elementum. Morbi
              consequat urna dolor, nec dignissim tortor malesuada sit amet.
              Integer gravida lorem ut massa dapibus molestie. Morbi pulvinar
              convallis est et volutpat. Curabitur lacinia est a diam
              sollicitudin posuere. Ut nec justo malesuada, blandit mauris id,
              consectetur libero. Donec mollis risus purus, a finibus arcu
              rutrum eget. Nulla vitae odio posuere, pulvinar mauris id,
              fermentum tortor. Mauris dictum leo sit amet lobortis fermentum.
              Maecenas auctor odio eget lectus scelerisque bibendum. Suspendisse
              maximus, tortor a interdum lacinia, risus nisi ornare risus, eget
              pharetra arcu nisl vitae felis. Morbi quis tortor in tortor
              laoreet pulvinar. Vestibulum fringilla pellentesque arcu, vitae
              consectetur metus lacinia ac. Mauris nec lectus non quam luctus
              laoreet. Praesent sem lacus, mattis id mauris a, semper accumsan
              arcu. Curabitur euismod felis at tristique luctus. Nam massa ante,
              sodales a mi at, ullamcorper tincidunt ipsum. Aenean facilisis
              massa et elit pulvinar commodo. Ut consequat, elit vitae tincidunt
              dapibus, erat odio tincidunt mauris, ut tempus massa sem in risus.
              In dapibus hendrerit mauris, non fringilla libero hendrerit ac.
              Aenean efficitur purus at facilisis posuere. Suspendisse aliquet
              lectus ligula, vel malesuada odio suscipit eget. Proin eget rutrum
              diam. Nunc efficitur pharetra vestibulum. Nam lacus metus,
              facilisis quis velit venenatis, convallis varius lectus. Ut
              malesuada magna in leo auctor, et scelerisque diam blandit.
              Suspendisse ultricies ornare ex sed imperdiet. Sed ut scelerisque
              lectus. Nulla blandit risus imperdiet, lobortis nisi at, congue
              velit. Mauris at volutpat lectus, eu tristique magna. Aenean sed
              dui nulla. Maecenas quis mollis libero, eu commodo mauris. Integer
              at lorem consectetur, fermentum erat at, pretium justo.
            </Typography>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutContent;

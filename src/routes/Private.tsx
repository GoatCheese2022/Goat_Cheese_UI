import React from 'react';
// import styled from 'styled-components';
// import { Box, Container, Heading, Link, Paragraph, Text } from 'styled-minimal';

// import { spacer } from 'modules/theme';
// import styles from "css/Background.module.css";
import styles from "css/Image.module.css";
import profile from "images/profile.png";
// import {backgroundImage} from "styled-system";

// import Github from 'containers/GitHub';

// const Header = styled.div`
//   margin-bottom: ${spacer(3)};
//   text-align: center;
// `;



function Private() {
  let empFirstLast = "GC";
  let empName = "Goat Cheese";
  let workPhone = "+1 980-765-4321";
  let email = "goatcheese@goatcheese.com"
  let mac = "S765-4321";
  let logonId = "U654321";
  let costCenter = "7654321";
  return (
    //First Way
    // <article
    //   className={styles.article}
    //   style={{backgroundImage: `url(${profile})`}}>
    //   <div className={styles.searchby}> Search by name </div>
    //   <h1 className={styles.header}>Goat</h1>
    // </article>

    // Second Way
    <article className={styles.article}>
      <img className={styles.image} src={profile} alt="profile"/>
      <h1 className={styles.welcome}>{empFirstLast}</h1>
      <form><input className={styles.search} type={"text"} id={empName} name={empName} placeholder={"Search by name"}/>
      </form>
      <h1 className={styles.empName}>{empName}</h1>
      <td className={styles.legalName}>{empName}</td>
      <td className={styles.workPhone}>{workPhone}</td>
      <a className={styles.email}>{email}</a>
      <td className={styles.mac}>{mac}</td>
      <td className={styles.logonId}>{logonId}</td>
      <td className={styles.costCenter}>{costCenter}</td>
      <h2 className={styles.activitiesTitle}>{empName}'s Activities</h2>
      <div className={styles.activities}>{empName} has no activities.</div>

    </article>


    // <Box key="Private" data-testid="Private">
    //   <Container ySpacing>
    //     <Header>
          /*<Heading>Oh hai!</Heading>*/
          /*<Paragraph>*/
          /*  You can get this boilerplate{' '}*/
          /*  <Link*/
          /*    href="https://github.com/gilbarbara/react-redux-saga-boilerplate/"*/
          /*    target="_blank"*/
          /*  >*/
          /*    here*/
          /*  </Link>*/
          /*</Paragraph>*/
        // </Header>
        /*<Box mb={4} textAlign="center">*/
        /*  <Heading as="h5">Here's some GitHub data</Heading>*/
        /*  <Text fontSize={1}>*/
        /*    <i>*Just to have some requests in the sagas...</i>*/
        /*  </Text>*/
        /*</Box>*/
        /*<Github />*/
      // </Container>
    // </Box>
  );
}

export default Private;

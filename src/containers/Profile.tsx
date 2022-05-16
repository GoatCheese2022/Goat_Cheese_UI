import React, {useCallback, useEffect, useState} from 'react';
// import styled from 'styled-components';
// import { Box, Container, Heading, Link, Paragraph, Text } from 'styled-minimal';

// import { spacer } from 'modules/theme';
// import styles from "css/Background.module.css";
import styles from "css/Image.module.css";
import profileImage from "images/profile.png";
// @ts-ignore
import searchIcon from "images/bell.svg"
import {useDispatch} from "react-redux";
import {useAppSelector} from "modules/hooks";
import {selectApp, selectProfile} from "selectors";
import useTreeChanges from "tree-changes-hook";
import {profiledata} from "config";
import {STATUS} from "literals";
import {getProfile, setAppOptions, showAlert} from "actions";
import {useUpdateEffect} from "react-use";
// import {Button} from "styled-minimal";
import Loader from "components/Loader";
import SoundButton from "components/SoundButton";
// import {backgroundImage} from "styled-system";

// import Github from 'containers/GitHub';

// const Header = styled.div`
//   margin-bottom: ${spacer(3)};
//   text-align: center;
// `;

function Profile() {

  let empFirstLast = "GC";
  let empName = "Goat Cheese";
  let workPhone = "+1 980-765-4321";
  let email = "goatcheese@goatcheese.com"
  let mac = "S765-4321";
  let logonId = "U654321";
  let costCenter = "7654321";
  // @ts-ignore
  let audio = "";

  const dispatch = useDispatch();
  const profile = useAppSelector(selectProfile);
  const { query } = useAppSelector(selectApp);

  const { changed } = useTreeChanges(profile.profiles[query] || profiledata);

  const { data = [], message = '', status = STATUS.IDLE } = profile.profiles[query] || profiledata;

  useEffect(() => {
    dispatch(getProfile(query));
  }, [dispatch, query]);

  useUpdateEffect(() => {
    if (changed('status', STATUS.ERROR)) {
      dispatch(showAlert(message, { variant: 'danger' }));
    }
  }, [changed, dispatch, message]);


  // const handleClick = useCallback(
  //   // (event: React.MouseEvent<HTMLButtonElement>) => {
  //   () => {
  //     // const { value = '' } = event.currentTarget.dataset;
  //     const value   = searchInput;
  //     dispatch(setAppOptions({ query: value }));
  //
  //   },
  //   [dispatch],
  // );

  const handleClick = useCallback(
    (e) => {
      console.log("valueeeeeeee: " + e.target.value)
      dispatch(setAppOptions({ query: e.target.value }));
    },
    [dispatch],
  );

  // @ts-ignore
  let [searchInput, setSearchInput] = useState("");

  // @ts-ignore
  // const handleInputClick = (e) => {
  //   e.preventDefault();
  //   console.log("event valueeeeee:  " + e.target.value)
  //   setSearchInput(e.target.value)
  //   handleClick(e);
  // }


  const isRunning = status === STATUS.RUNNING;

  if (status === STATUS.SUCCESS) {
    console.log("dataaaaaaaaaaaaa length: " + data.length);
    // output = data.length? (
    // @ts-ignore
    empName = data["firstName"] + " " + data["lastName"];
    // @ts-ignore
    empFirstLast = data["empFirstLast"];
    // @ts-ignore
    workPhone = data["workPhone"];
    // @ts-ignore
    email = data["email"]
    // @ts-ignore
    mac = data["mac"];
    // @ts-ignore
    logonId = data["userId"];
    // @ts-ignore
    audio = data["audioFileBytes"];

    // data.map((d: Record<string, any>) =>  {
    //       empName = d.firstName;
    //       workPhone = d.workPhone;
    //   })
      // <Grid
      //   data-testid="GitHubGrid"
      //   data-value={query}
      //   gridGap={{
      //     _: spacer(2),
      //     sm: spacer(3),
      //     xl: spacer(4),
      //   }}
      //   gridTemplateColumns={{
      //     _: '100%',
      //     md: 'repeat(2, 1fr)',
      //     lg: 'repeat(3, 1fr)',
      //     xl: 'repeat(4, 1fr)',
      //   }}
      //   m="0 auto"
      //   mt={5}
      //   padding={0}
      //   width={{
      //     _: '100%',
      //     sm: '90%',
      //   }}
      // >
        /*{data.map((d: Record<string, any>) => (*/
        /*  <Item key={d.id} href={d.html_url} target="_blank">*/
        /*    <Image alt={d.owner.login} src={d.owner.avatar_url} />*/
        /*    <ItemHeader>*/
        /*      <Heading as="h5" h={100} lineHeight={1}>*/
        /*        {d.name}*/
        /*      </Heading>*/
        /*      <small>{d.owner.login}</small>*/
        /*    </ItemHeader>*/
        /*    <Paragraph>{d.description}</Paragraph>*/
        /*  </Item>*/
        /*))}*/
      // </Grid>
    // ) : (
    //   <h3>Nothing found</h3>
    // );
  } else {
    <Loader block />;
  }

  // return (
  //   <div key="GitHub" data-testid="GitHubWrapper">
  //     <Flex justifyContent="center">
  //       <ButtonGroup aria-label="GitHub Selector" data-testid="GitHubSelector" role="group">
  //         <Button
  //           busy={query === 'react' && isRunning}
  //           data-value="react"
  //           invert={query !== 'react'}
  //           onClick={handleClick}
  //           size="lg"
  //         >
  //           React
  //         </Button>
  //         <Button
  //           busy={query === 'redux' && isRunning}
  //           data-value="redux"
  //           invert={query !== 'redux'}
  //           onClick={handleClick}
  //           size="lg"
  //         >
  //           Redux
  //         </Button>
  //       </ButtonGroup>
  //     </Flex>
  //     {output}
  //   </div>
  // );



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
      <img className={styles.image} src={profileImage} alt="profile"></img>
      <h1 className={styles.welcome}>{empFirstLast}</h1>
      <form>
        <input className={styles.search} type={"text"} id={empName} name={empName} placeholder={"Search by ID"} onChange={handleClick}/>
      </form>
      <h1 className={styles.empName}>{empName}</h1>
      <td className={styles.legalName}>{empName}</td>
      <SoundButton audioFile={audio}></SoundButton>
      <td className={styles.workPhone}>{workPhone}</td>
      <a className={styles.email}>{email}</a>
      <td className={styles.mac}>{mac}</td>
      <td className={styles.logonId}>{logonId}</td>
      <td className={styles.costCenter}>{costCenter}</td>
      <h2 className={styles.activitiesTitle}>{empName}'s Activities</h2>
      <div className={styles.activities}>{empName} has no activities.</div>

      {/*<Button*/}
      {/*  // className={styles.searchButton}*/}
      {/*  busy={query === 'U878776' && isRunning}*/}
      {/*  data-value="U878776"*/}
      {/*  invert={query !== 'U878776'}*/}
      {/*  // onClick={handleClick}*/}
      {/*  size="sm"*/}
      {/*>*/}
      {/*</Button>*/}
    </article>


    // <Box key="Profile" data-testid="Profile">
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

export default Profile;

import React, {useCallback, useEffect} from 'react';
import styles from "css/Image.module.css";
import profileImage from "images/profile.png";
import {useDispatch} from "react-redux";
import {useAppSelector} from "modules/hooks";
import {selectApp, selectProfile} from "selectors";
import useTreeChanges from "tree-changes-hook";
import {profiledata} from "config";
import {STATUS} from "literals";
import {getProfile, setAppOptions} from "actions";
import {useUpdateEffect} from "react-use";
import Loader from "components/Loader";
import SoundButton from "components/SoundButton";


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
      // dispatch(showAlert(message, { variant: 'danger' }));
    }
  }, [changed, dispatch, message]);

  const handleClick = useCallback(
    (e) => {
      dispatch(setAppOptions({ query: e.target.value }));
    },
    [dispatch],
  );

  // @ts-ignore
  const isRunning = status === STATUS.RUNNING;

  if (status === STATUS.SUCCESS) {
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
  } else {
    <Loader block />;
  }

  return (
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
    </article>
  );
}

export default Profile;

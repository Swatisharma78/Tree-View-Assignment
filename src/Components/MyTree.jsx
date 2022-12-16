import React from 'react'
import FontAwesomeIcon  from "react-folder-tree";
import styles from "./MyTree.module.css";
const MyTree = () => {
  const onChangeTree = (state,event) => console.log(state, event);
  const TreeData = {
    "type":"folder",
    "name":"afsd",
    children: [
      {
        "type":"folder",
        "name":"fas",
        children:[
        ]
        },
      {
        "type":"file",
        "name":"sfd"
      }
    ]
  }
  return (
 <div className={styles.tree}>
 <div className={styles.treeHeader}> tree view</div>
    <FontAwesomeIcon  data={TreeData }
    onChange={onChangeTree}
    showCheckbox={false} icon="fa-solid fa-file" />
</div>
  )
}
export default MyTree

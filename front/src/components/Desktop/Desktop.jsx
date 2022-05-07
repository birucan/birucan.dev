import React, {useState} from "react";

import { getFile, createFile, addFileToFolder } from "../../utils/fileManager";

export default function Desktop(){
    const desktop = require('../../objects/defaultFolders.json').root.desktop;


    return(
        <>
            <div style={{
              display: "flex",
              flexFlow: "column wrap",
              height: "100%",
              width: "100%",
              alignContent: "flex-start",
            }}>
                {
                    Object.keys(desktop).map((item)=>{
                        console.log(getFile(item).icon)
                        return(
                            <div style={{
                              position: "relative",
                              display: "block",
                              outline: "none",
                              background: "none",
                              border: "none",
                              color: "initial",
                              textDecoration: "none",
                              padding: "1px 7px 2px",
                              padding: "initial",
                              margin: "3px",
                              width: "52px",
                              height: "58px",
                              textAlign: "center",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center"
                            }}>

                                <img height={32} width={32} alt="" src={(getFile(item).type==="folder" && getFile(item).icon==="default")?"icons/folder.png":getFile(item).icon}/>
                                <div style={{
                                  maxHeight: 22,
                                  padding: "2px 3px",
                                  maxWidth: "100%",
                                  overflow: "hidden",
                                  display: "inline-block",
                                  position: "absolute",
                                  marginTop: 2,
                                  top: 33,
                                }}>
                                    {item}
                                </div>
                                
                            </div>
                        );
                    })
                }

            </div>
        </>
    );
}
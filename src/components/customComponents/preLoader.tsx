import React from "react";
import { Circles } from "react-loader-spinner";

export const PreLoader = () => {
    return (
        <div style={styles.container}>
            <Circles
                height="80"
                width="80"
                color="#295dd6"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};
const styles ={
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center'
    }
}
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"], // For headings
                inter: ["Inter", "sans-serif"],     // For body text
            },
            colors : {
                lightHover:'#edf2f4',
                darkHover:'#2a004a',
                darkTheme: '#11001f',

            },
            boxShadow:{
                'black' : '4px_4px_0_#000',
                'white' : '4px_4px_0_#fff',
            }
        },
    },
    darkMode : 'selector',
};
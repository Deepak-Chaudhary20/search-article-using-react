## Creating React Article filter App.


[simple functions are used in the application like ternary operator components, class, statless functions and many more.]


### Ternery Operator, filter(), map().
    
    1. CONDITION ? TRUE : FALSE;
    if condition is TRUE then condition first will be executed else condition last will be executed.

    2. news.filter((item) => item.indexOf(condition) > -1)
        then one of the major function is filter is used to filter the condition.
    
    3. map(item => <li>{item}</li>)
    

<a href ="http://codewithdeepak.in">Portfolio <img src="https://th.bing.com/th/id/R.89781f9d1ea6d60175e44db9efbf2a9e?rik=yIUR2R9%2fnfMhfw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_182200.png&ehk=2Pz75MY3sXwx6RivP%2buKpX6yGmZTFa%2bXcjnvs%2bisWxk%3d&risl=&pid=ImgRaw&r=0" height="15px" width="15px"> Website</a>


### Showing how to write inline CSS and CSS styles in Object formats.  

    const styles = {
        logo: {
            fontSize: '20px',
            backgroundColor: "#333"
        }
    }

    IN JSX you can use this.

    return (
        <div>
            <div style = {styles.logo}>Logo</div>
        </div>
    )
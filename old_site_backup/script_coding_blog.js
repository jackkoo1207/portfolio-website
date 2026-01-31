const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);
function templateblock(context,ID){
    const compiledHtml = template(context);
    const displayGoals = document.getElementById(ID);
    displayGoals.innerHTML = compiledHtml;
}

const context = {
  languages:[
    {
        name:'HTML',
        image:'HTML5.png',
        intro:'Structure'
    },
    {
        name:'CSS',
        image:'CSS3.png',
        intro:'Style'
    },
    {
        name:'JavaScript',
        image:'es6.png',
        intro:'Interactivity'
    }]
};

templateblock(context,'HTML_CSS_JS');

const context2 = {
    languages:[
        {
            name:'C',
            image:'C.png',
            intro:'Git, Unix , etc.'
        },
      {
          name:'C++',
          image:'C++.png',
          intro:'Arduino, Unreal Engine, etc.'
      },
      {
          name:'C#',
          image:'C_sharp.png',
          intro:'Unity'
      }]
  };

  templateblock(context2,'Cpp');

  const context3 = {
    languages:[
        {
            name:'Java',
            image:'Java.png',
            intro:'Minecraft '
        },
      {
          name:'Python',
          image:'Python.png',
          intro:'Intel, IBM, NASA,, etc.'
      }
      ]
  };
  
  templateblock(context3,'Java');

  const context4 = {
    languages:[
        {
            name:'Latex',
            image:'latex.svg',
            intro:'Mathematics '
        }
      ]
  };
  
  templateblock(context4,'latex');




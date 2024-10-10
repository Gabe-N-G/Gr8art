# Gr8Art
- An array based painting program
- [heroku link here](https://gr8art-ead8e5329b10.herokuapp.com/)


### Home page
![Home screen](/screenshots/home.png)

## Overview

Gr8 art is a program that allows users to paint 64 or 256 pixel drawings and share them online. Inspired by oekaki boards of the early 2000s (example: https://kiriska.com/oekaki/ code: https://github.com/funige/neo/)  and a love of sprite art.

### Desktop view
![desktop edit page](/screenshots/desktop%20edit.png)

### Phone/responsive view
![phone edit page](/screenshots/phone%20edit.png)

## Preplanning

My ERD can be found here - [figjam](https://www.figma.com/board/chVKVDdLApMOTEJZpDqhVC/ERD---Project-2?node-id=0-1&t=CAoLJTfeK5I6L7JX-1)

A basic set of views I've wired framed on figma and some mood and inspo can be found here -  [figma](https://www.figma.com/design/hVthPtUq5au8cjwAi4nx6c/Gr8-art%2C-project-2.?node-id=1-3&t=k6jailXDSXAkxph0-1)

I created a project board for the first time in github here - [github project](https://github.com/users/Gabe-N-G/projects/1)

## Technologies Used
- HTML/CSS/JS
- CSS flexbox
- MongoDB 
- Express 
- EJS
- becrypt
- Node.js

## Under the hood/how it started

When brainstorming for our 2nd project I made some wants for my project. I wanted it to be visual, and I did not want to use any external programs to render images. When thinking about making pixel art, it came to my attention that due to flexbox, it is easy to arrange 64 divs in an single array to show up as a grid using flex wrap and similarly sized boxes.

[example codepen](https://codepen.io/MarioBland/pen/OJKNWpx)

CSS
```css 
.flex-container {
    display: flex;
    flex-wrap: wrap;
    width: 375px;
    height: 375px;
  }
  
  .flex-item {
    /* 12.5% is 1/8*/
    width: 12.5%; 
    height: 12.5%;
    border: 2px dashed black;
  }
  ```

Javascript
  ```javascript
    function makeGrid() {
        if (newContainer){
            newContainer.innerHTML = " "
            for(let i = 0; i < 64; i++){
                let div = document.createElement("div")
                div.classList.add("flex-item")
                div.setAttribute("id",`cell`+ i)
                newContainer.appendChild(div)
            }
        }
    }
  ```

HTML
```html
    <div class="flex-container" id="new-container">
                <!-- what JS is updating with 
                    <div id="cell1" class="flex-item">1</div> 64 times -->
                </div>
```

After that the next challenege would be coloring the boxes and collecting those colors to be reprinted on different pages and stored in an database.

## Challenges

Alot of the difficulty with my project came with using EJS as a templating service. With EJS, it's hard to send non-text data and stored variables.

A great example of this is how I had to send back image data into the database. Inside the form, I had to create a hidden field that is being maniuplated by js on a seperate script file.

```html
 <input type="hidden" id="colorArray" name="colorArray">

                <br>

                <button class="submit-button" type="submit">Add art!</button>
```

```javascript
//adds color array as an hidden input to form
const colorInput = document.querySelector("#colorArray")

let form =  document.querySelector('#art-form')
form.addEventListener("submit",()=>{
    collectColors()
    colorInput.value=JSON.stringify(colorArray)
})
```

This was one of a few workarounds I had to use to be able to send back and forth js variables from my EJS pages. Another one would be simply rending an image on the home screen. 

```javascript
//server ejs.

res.render('index.ejs', 
      {displayGrid : ['grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'magenta', 'magenta', 'magenta', 'magenta', 'grey', 'grey', 'grey', 'grey', 'magenta', 'grey', 'grey', 'magenta', 'grey', 'grey', 'grey', 'grey', 'magenta', 'magenta', 'magenta', 'magenta', 'grey', 'grey', 'grey', 'grey', 'magenta', 'grey', 'grey', 'magenta', 'grey', 'grey', 'grey', 'grey', 'magenta', 'grey', 'grey', 'magenta', 'grey', 'grey', 'grey', 'grey', 'magenta', 'magenta', 'magenta', 'magenta', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey'] }
    );

```

This is because I could not simply make an array exist on the home page even in script tags.


## Next steps

Stretch goals not implemented

- More styling on the website
- A button to grow/shrink the grid in new/edit pages so a user can see their work better
- More selectable colors/type your color in button for hex codes
- Porting to react for infinite scroll and less EJS workarounds.


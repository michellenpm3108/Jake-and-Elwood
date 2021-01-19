const exitBtn = document.getElementById('exit-btn')
const menuBtn = document.getElementById('menu-btn')
const navigation = document.getElementById('nav')
menuBtn.addEventListener('click', function(){
    navigation.style.display="block"
})
exitBtn.addEventListener('click', function(){
    navigation.style.display="none"
})
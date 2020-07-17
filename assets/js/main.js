function handleClick()
{
    this.value = (this.value == 'Read More' ? 'Read Less' : 'Read More');
}
document.getElementById('collapsible').onclick=handleClick;

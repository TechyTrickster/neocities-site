var mapQueryWithContent = (category) =>
{
    var categoryBlurb = ""

    switch(category) 
    {
        case 'coding':
            categoryBlurb = 'coding-info'
            break;
        case '3d-printing':
            categoryBlurb = '3d-printing-info'
            break;
        case 'games':
            categoryBlurb = 'gaming-info'
            break;
        case 'art':
            categoryBlurb = 'art-info'
            break;
        case 'writing':
            categoryBlurb = 'writing-info'
            break;
        case 'blog':
            categoryBlurb = 'blog-info'
            break;
    }

    var output = '/content/main/category-blurbs/' + categoryBlurb + '.md'    
    return output
}   
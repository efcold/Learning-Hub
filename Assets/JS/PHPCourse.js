const Logo={
    src: "/Assets/Images/Index/PHP.png",
    alt: "Course Logo" 
}
const categoryTitle = {
    content1: { icon: 'fas fa-server', title: 'Introduction to PHP' },
    content2: { icon: 'fas fa-code', title: 'PHP Syntax' },
    content3: { icon: 'fas fa-tag', title: 'PHP Variables' },
    content4: { icon: 'fas fa-comment-dots', title: 'PHP Comments' },
    content5: { icon: 'fas fa-database', title: 'PHP Data Types' },
    content6: { icon: 'fas fa-exchange-alt', title: 'PHP Conditionals' },
    content7: { icon: 'fas fa-sync-alt', title: 'PHP Loops' },
    content8: { icon: 'fas fa-list', title: 'PHP Arrays' },
    content9: { icon: 'fas fa-file-code', title: 'PHP Functions' },
    content10: { icon: 'fas fa-folder-open', title: 'PHP File Handling' },
    content11: { icon: 'fas fa-check-circle', title: 'Assessment' },
};

const categoryContent = {
    content1: `
    <div>
        <h1>Introduction to HTML</h1>
        <h2>Module 1</h2>
            <hr>
        <div class="definition">
            <p>What is HTML?</p>
            <p>HTML (HyperText Markup Language) is the standard markup language for building web pages. It describes the structure of a web page using a collection of elements. These elements provide the browser with instructions on how to display the text, naming different sections such as headings, paragraphs, links, and more.</p>
            <p><strong>Example:</strong></p>
            <pre>
                <img src="/Assets/Images/Courses/C-HTML/Structure.png" alt="HTML Structure Example" style="max-width:20%; height:auto;">

                &lt;!DOCTYPE html&gt; — This line tells the web browser that this document is an HTML5 document.
                &lt;html&gt; — This tag starts the HTML document. Everything inside this tag is part of the HTML code.
                &lt;head&gt; — This tag contains information about the web page that is not displayed directly on the page like its title.
                &lt;title&gt;Page Title&lt;/title&gt; — Sets the title that shows in the browser tab.
                &lt;/head&gt; — Ends the head section.
                &lt;body&gt; — Starts the visible part of the web page.
                &lt;h1&gt;Heading&lt;/h1&gt; — This creates a main heading on the page. It’s usually the biggest text and is important for understanding the content.
                &lt;p&gt;Paragraph&lt;/p&gt; — This creates a paragraph of text. It’s used for regular content.
                &lt;/body&gt; — This tag closes the body section of the web page.
                &lt;/html&gt; — This tag closes the HTML document. It signals the end of the HTML code.
            </pre>
        </div>

        <hr>

        <div class="html-element">
            <p><strong>HTML Element</strong></p>
            <p>An HTML element is a basic building block of an HTML document. It consists of a start tag, content, and an end tag. For example, in the element &lt;p&gt;Paragraph&lt;/p&gt;:</p>
            <ul>
                <li>&lt;p&gt; is the start tag, indicating the beginning of a paragraph.</li>
                <li>Paragraph is the content.</li>
                <li>&lt;/p&gt; is the end tag, marking the end of the paragraph.</li>
            </ul>
            <p><strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have an end tag!</p>
        </div>

        <hr>

        <div class="creating-page">
            <h2>Creating Your First Web Page with Notepad or TextEdit</h2>
            <h3>Why Use a Simple Text Editor?</h3>
            <p>For learning HTML, it's best to use a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
            <h3>Steps to Create Your Web Page:</h3>
            <h4>Step 1: Open Notepad (PC)</h4>
            <p>Windows 8 or later: Click the Start button and type "Notepad."<br>
            Windows 7 or earlier: Go to Start > Programs > Accessories > Notepad.</p>
            
            <h4>Step 1: Open TextEdit (Mac)</h4>
            <p>Open Finder, then go to Applications > TextEdit.<br>
            Change settings:<br>
            Go to Preferences > Format and select "Plain Text."<br>
            Under "Open and Save," check "Display HTML files as HTML code."</p>
            
            <h4>Step 2: Write Your HTML Code</h4>
            <p>Copy and paste this code into Notepad or TextEdit:</p>
            <pre>
                &lt;!DOCTYPE html&gt;
                &lt;html&gt;
                &lt;body&gt;

                &lt;h1&gt;My Heading&lt;/h1&gt;
                &lt;p&gt;My paragraph.&lt;/p&gt;

                &lt;/body&gt;
                &lt;/html&gt;
            </pre>
            
            <h4>Step 3: Save Your Web Page</h4>
            <p>In Notepad, click File > Save As.<br>
            Name the file "index.htm" and choose UTF-8 as the encoding.</p>
            
            <h4>Step 4: View in Browser</h4>
            <p>Open the saved file in your web browser to see your first web page!</p>
        </div>

        <hr>

        <button class="next-module" data-next="quiz1">Take Quiz</button>
    </div>
`,
    content2: `<h1>HTML Basic Syntax</h1>
<h2>Module 2</h2>

<hr>

<h2>1. Basic Structure</h2>
<p>This is a basic HTML document structure:</p>
<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome!&lt;/h1&gt;
    &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
<ul>
    <li>&lt;!DOCTYPE html&gt;: Declares that this is an HTML5 document.</li>
    <li>&lt;html&gt;: Starts the HTML document.</li>
    <li>&lt;head&gt;: Contains meta-information, like the title.</li>
    <li>&lt;title&gt;: Sets the title of the web page (shown in the browser tab).</li>
    <li>&lt;body&gt;: Contains the visible content of the web page.</li>
    <li>&lt;h1&gt;: Main heading of the page.</li>
    <li>&lt;p&gt;: A paragraph of text.</li>
</ul>

<hr>

<h2>2. Headings</h2>
<p>Headings help to structure the content of your web page:</p>
<pre>
&lt;h1&gt;This is a Heading 1&lt;/h1&gt;
&lt;h2&gt;This is a Heading 2&lt;/h2&gt;
&lt;h3&gt;This is a Heading 3&lt;/h3&gt;
</pre>
<p>&lt;h1&gt; to &lt;h6&gt;: Tags for headings, with &lt;h1&gt; being the largest and most important, and &lt;h6&gt; being the smallest.</p>

<hr>

<h2>3. Paragraphs</h2>
<p>Paragraphs are defined using the &lt;p&gt; tag:</p>
<pre>
&lt;p&gt;This is the first paragraph.&lt;/p&gt;
&lt;p&gt;This is the second paragraph.&lt;/p&gt;
</pre>
<p>&lt;p&gt;: Defines a paragraph of text. Each &lt;p&gt; tag creates a new paragraph with space around it.</p>

<hr>

<h2>4. Links</h2>
<p>Links are created with the &lt;a&gt; tag:</p>
<pre>
&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;
</pre>
<p>&lt;a&gt;: Creates a hyperlink.</p>
<ul>
    <li>href: Attribute that specifies the URL the link points to.</li>
    <li>The text between the tags is what users click on.</li>
</ul>

<hr>

<h2>5. Images</h2>
<p>Images can be embedded using the &lt;img&gt; tag:</p>
<pre>
&lt;img src="image.jpg" alt="Description of Image" /&gt;
</pre>
<ul>
    <li>&lt;img&gt;: Embeds an image in the web page.</li>
    <li>src: Attribute that specifies the path to the image file.</li>
    <li>alt: Provides alternative text for the image (important for accessibility).</li>
</ul>

<hr>

<h2>6. Lists</h2>
<p>HTML supports both unordered and ordered lists:</p>
<p>Unordered List:</p>
<pre>
&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
</pre>
<p>&lt;ul&gt;: Starts an unordered (bulleted) list.</p>
<p>Ordered List:</p>
<pre>
&lt;ol&gt;
    &lt;li&gt;First item&lt;/li&gt;
    &lt;li&gt;Second item&lt;/li&gt;
    &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;
</pre>
<p>&lt;ol&gt;: Starts an ordered (numbered) list.</p>

<hr>

<h2>7. Table</h2>
<p>Tables are created using the &lt;table&gt; tag:</p>
<pre>
&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Header 1&lt;/th&gt;
        &lt;th&gt;Header 2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Data 1&lt;/td&gt;
        &lt;td&gt;Data 2&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</pre>
<ul>
    <li>&lt;table&gt;: Creates a table.</li>
    <li>&lt;tr&gt;: Starts a new row in the table.</li>
    <li>&lt;th&gt;: Table header cell (bold and centered by default).</li>
    <li>&lt;td&gt;: Table data cell (contains regular content).</li>
</ul>

<hr>

<button class="next-module" data-next="quiz2">Take Quiz</button>
`,
content3: 
`<div>
    <h1>HTML Attributes</h1>
    <h2>Module 3</h2>
        <hr>
    <h3>HTML attributes provide additional information about elements. Here are some common examples of HTML attributes:</h3>
        <ol start="1">
        <li><strong>href Attribute (Links)</strong><br>
            <code>&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;</code><br>
            <em>Usage:</em> Specifies the URL that the link points to.
        </li>
   
    <hr>

        <li><strong>src Attribute (Images)</strong><br>
            <code>&lt;img src="image.jpg" alt="A beautiful scenery" /&gt;</code><br>
            <em>Usage:</em> Indicates the path to the image file.
        </li>
        <hr>
        <li><strong>alt Attribute (Images)</strong><br>
            <code>&lt;img src="image.jpg" alt="A description of the image" /&gt;</code><br>
            <em>Usage:</em> Provides alternative text for the image, useful for accessibility.
        </li>
     
    <hr>
   
        <li><strong>title Attribute (Tooltips)</strong><br>
            <code>&lt;a href="https://www.example.com" title="Go to Example.com"&gt;Visit Example.com&lt;/a&gt;</code><br>
            <em>Usage:</em> Displays additional information as a tooltip when the mouse hovers over the element.
        </li>
        <hr>
        <li><strong>style Attribute (Inline CSS)</strong><br>
            <code>&lt;p style="color: blue;"&gt;This text is blue.&lt;/p&gt;</code><br>
            <em>Usage:</em> Applies inline styles directly to the element.
        </li>
        <hr>
        <li><strong>id Attribute (Unique Identifier)</strong><br>
            <code>&lt;h1 id="main-heading"&gt;Main Heading&lt;/h1&gt;</code><br>
            <em>Usage:</em> Assigns a unique identifier to an element, useful for styling and scripting.
        </li>
        <hr>
        <li><strong>class Attribute (Grouping Elements)</strong><br>
            <code>&lt;p class="highlight"&gt;This is a highlighted paragraph.&lt;/p&gt;</code><br>
            <em>Usage:</em> Assigns one or more class names to an element for styling or scripting.
        </li>
        <hr>
        <li><strong>target Attribute (Links)</strong><br>
            <code>&lt;a href="https://www.example.com" target="_blank"&gt;Open in a new tab&lt;/a&gt;</code><br>
            <em>Usage:</em> Specifies where to open the linked document (e.g., _blank opens in a new tab).
        </li>
        <hr>
        <li><strong>placeholder Attribute (Forms)</strong><br>
            <code>&lt;input type="text" placeholder="Enter your name" /&gt;</code><br>
            <em>Usage:</em> Provides a hint to the user about what to enter in an input field.
        </li>
        <hr>
        <li><strong>value Attribute (Forms)</strong><br>
            <code>&lt;input type="submit" value="Submit" /&gt;</code><br>
            <em>Usage:</em> Sets the text displayed on a submit button.
        </li>
        <hr>
        <li><strong>disabled Attribute (Forms)</strong><br>
            <code>&lt;input type="text" disabled /&gt;</code><br>
            <em>Usage:</em> Disables an input element, making it uneditable.
        </li>
    </ol>
    <hr>
    <p>These examples showcase how attributes can enhance HTML elements by providing additional context, functionality, and styling options.</p>
    <button class="next-module" data-next="quiz3">Take Quiz</button>
</div>
`,
content4: 
`<div>
    <h1>HTML Headings</h1>
    <h2>Module 4</h2>
    <hr>
    <h3>HTML headings are used to define the structure of your content, with six levels of headings available. Here are examples of each:</h3>
   <ol start="1">
        <li><strong>Heading Level 1 (&lt;h1&gt;)</strong><br>
            <code>&lt;h1&gt;This is a Heading 1&lt;/h1&gt;</code><br>
            <em>Typically used for the main title of a page.</em>
        </li>
        <hr>
        <li><strong>Heading Level 2 (&lt;h2&gt;)</strong><br>
            <code>&lt;h2&gt;This is a Heading 2&lt;/h2&gt;</code><br>
            <em>Used for major sections within the page.</em>
        </li>
        <hr>
        <li><strong>Heading Level 3 (&lt;h3&gt;)</strong><br>
            <code>&lt;h3&gt;This is a Heading 3&lt;/h3&gt;</code><br>
            <em>Used for subsections under &lt;h2&gt; headings.</em>
        </li>
        <hr>
        <li><strong>Heading Level 4 (&lt;h4&gt;)</strong><br>
            <code>&lt;h4&gt;This is a Heading 4&lt;/h4&gt;</code><br>
            <em>Used for further subdivisions under &lt;h3&gt; headings.</em>
        </li>
        <hr>
        <li><strong>Heading Level 5 (&lt;h5&gt;)</strong><br>
            <code>&lt;h5&gt;This is a Heading 5&lt;/h5&gt;</code><br>
            <em>Used for smaller sections under &lt;h4&gt; headings.</em>
        </li>
        <hr>
        <li><strong>Heading Level 6 (&lt;h6&gt;)</strong><br>
            <code>&lt;h6&gt;This is a Heading 6&lt;/h6&gt;</code><br>
            <em>The smallest heading, used for minor sections.</em>
        </li>
    </ol>
    <hr>
    <p><strong>Example Usage in a Document</strong><br>
    Here’s how you might structure a document using all six heading levels:</p>
    <code>&lt;h1&gt;Main Title&lt;/h1&gt;<br>
    &lt;h2&gt;Section 1&lt;/h2&gt;<br>
    &lt;h3&gt;Subsection 1.1&lt;/h3&gt;<br>
    &lt;h4&gt;Detail 1.1.1&lt;/h4&gt;<br>
    &lt;h5&gt;Note 1.1.1.1&lt;/h5&gt;<br>
    &lt;h6&gt;Minor Detail&lt;/h6&gt;<br>
    &lt;h2&gt;Section 2&lt;/h2&gt;<br>
    &lt;h3&gt;Subsection 2.1&lt;/h3&gt;</code>
    <hr>
    <p><strong>Importance of Headings</strong></p>
    <ul>
        <li><strong>SEO:</strong> Search engines use headings to understand the structure and content of a page.</li>
        <li><strong>Accessibility:</strong> Headings help screen readers navigate the content.</li>
        <li><strong>Readability:</strong> They make the content easier to scan for users.</li>
    </ul>
    <hr>
    <p>Using headings appropriately enhances both the user experience and search engine optimization!</p>
    <button class="next-module" data-next="quiz4">Take Quiz</button>
</div>
`,
content5: 
`<div>
    <h1>HTML Paragraphs</h1>
    <h2>Module 5</h2>
    <hr>
    <p>HTML paragraphs are used to define blocks of text. Each paragraph is created using the <code>&lt;p&gt;</code> tag. Here are some examples:</p>
    <ol start="1">
        <li><strong>Basic Paragraph Example</strong><br>
            <code>&lt;p&gt;This is a simple paragraph.&lt;/p&gt;</code>
        </li>
        <hr>
        <li><strong>Multiple Paragraphs</strong><br>
            <code>&lt;p&gt;This is the first paragraph.&lt;/p&gt;<br>
            &lt;p&gt;This is the second paragraph.&lt;/p&gt;<br>
            &lt;p&gt;This is the third paragraph.&lt;/p&gt;</code>
        </li>
        <hr>
        <li><strong>Paragraphs with Line Breaks</strong><br>
            You can create line breaks within a paragraph using the <code>&lt;br&gt;</code> tag:<br>
            <code>&lt;p&gt;This is the first line.&lt;br&gt;This is the second line.&lt;br&gt;This is the third line.&lt;/p&gt;</code>
        </li>
        <hr>
        <li><strong>Paragraphs with Formatting</strong><br>
            You can include inline elements for formatting within paragraphs:<br>
            <code>&lt;p&gt;This is a &lt;strong&gt;bold&lt;/strong&gt; word and this is an &lt;em&gt;italic&lt;/em&gt; word.&lt;/p&gt;</code>
        </li>
    </ol>
    <hr>
    <p><strong>Example in a Document</strong><br>
    Here’s how you might structure a document with paragraphs:</p>
    <code>&lt;!DOCTYPE html&gt;<br>
    &lt;html&gt;<br>
    &lt;head&gt;<br>
        &lt;title&gt;Paragraph Example&lt;/title&gt;<br>
    &lt;/head&gt;<br>
    &lt;body&gt;<br>
        &lt;h1&gt;Understanding Paragraphs&lt;/h1&gt;<br>
        &lt;p&gt;Paragraphs are blocks of text that are important for readability.&lt;/p&gt;<br>
        &lt;p&gt;They help organize content and make it easier to understand.&lt;/p&gt;<br>
        &lt;p&gt;Using &lt;strong&gt;HTML&lt;/strong&gt;, you can create multiple paragraphs easily.&lt;/p&gt;<br>
    &lt;/body&gt;<br>
    &lt;/html&gt;</code>
    <hr>
    <p><strong>Key Points about Paragraphs</strong></p>
    <ul>
        <li><strong>Spacing:</strong> Browsers automatically add space before and after each <code>&lt;p&gt;</code> element.</li>
        <li><strong>Semantics:</strong> Paragraphs improve the semantic structure of your content.</li>
        <li><strong>Accessibility:</strong> They help screen readers and other assistive technologies navigate text effectively.</li>
    </ul>
    <hr>
    <button class="next-module" data-next="quiz5">Take Quiz</button>
</div>
`,
content6: 
`<div>
    <h1>HTML Styles</h1>
    <h2>Module 6</h2>
    <hr>
    <p>HTML styles are typically applied using CSS (Cascading Style Sheets). However, you can also use inline styles directly within HTML tags. Here are some examples of both approaches:</p>
     <ol start="1">
        <li><strong>Inline Styles</strong><br>
            You can apply styles directly in an HTML element using the style attribute.<br>
            <code>&lt;p style="color: blue; font-size: 16px;"&gt;This is a blue paragraph with a font size of 16 pixels.&lt;/p&gt;</code>
        </li>
    <hr>
        <li><strong>Internal CSS</strong><br>
            You can define styles within a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section of your HTML document:<br>
            <code>&lt;!DOCTYPE html&gt;<br>
            &lt;html&gt;<br>
            &lt;head&gt;<br>
                &lt;title&gt;Internal CSS Example&lt;/title&gt;<br>
                &lt;style&gt;<br>
                    body {<br>
                        background-color: lightgray;<br>
                    }<br>
                    h1 {<br>
                        color: darkblue;<br>
                    }<br>
                    p {<br>
                        font-family: Arial, sans-serif;<br>
                        font-size: 14px;<br>
                    }<br>
                &lt;/style&gt;<br>
            &lt;/head&gt;<br>
            &lt;body&gt;<br>
                &lt;h1&gt;Welcome to My Web Page&lt;/h1&gt;<br>
                &lt;p&gt;This is a styled paragraph.&lt;/p&gt;<br>
            &lt;/body&gt;<br>
            &lt;/html&gt;</code>
        </li>
        <hr>
        <li><strong>External CSS</strong><br>
            You can link to an external CSS file, which is a common practice for larger projects.<br>
            HTML File:<br>
            <code>&lt;!DOCTYPE html&gt;<br>
            &lt;html&gt;<br>
            &lt;head&gt;<br>
                &lt;title&gt;External CSS Example&lt;/title&gt;<br>
                &lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;<br>
            &lt;/head&gt;<br>
            &lt;body&gt;<br>
                &lt;h1&gt;Welcome to My Website&lt;/h1&gt;<br>
                &lt;p&gt;This is a paragraph styled from an external CSS file.&lt;/p&gt;<br>
            &lt;/body&gt;<br>
            &lt;/html&gt;</code><br>
            External CSS File (styles.css):<br>
            <code>body {<br>
                background-color: #f0f0f0;<br>
            }<br>
            h1 {<br>
                color: #333;<br>
            }<br>
            p {<br>
                font-size: 16px;<br>
                line-height: 1.5;<br>
            }</code>
        </li>
        <hr>
        <li><strong>CSS Classes</strong><br>
            You can create reusable styles using classes.<br>
            <code>&lt;!DOCTYPE html&gt;<br>
            &lt;html&gt;<br>
            &lt;head&gt;<br>
                &lt;title&gt;CSS Classes Example&lt;/title&gt;<br>
                &lt;style&gt;<br>
                    .highlight {<br>
                        background-color: yellow;<br>
                        font-weight: bold;<br>
                    }<br>
                &lt;/style&gt;<br>
            &lt;/head&gt;<br>
            &lt;body&gt;<br>
                &lt;p class="highlight"&gt;This paragraph is highlighted.&lt;/p&gt;<br>
                &lt;p&gt;This paragraph is not highlighted.&lt;/p&gt;<br>
            &lt;/body&gt;<br>
            &lt;/html&gt;</code>
        </li>
        <hr>
        <li><strong>CSS IDs</strong><br>
            You can also use IDs for unique styling.<br>
            <code>&lt;!DOCTYPE html&gt;<br>
            &lt;html&gt;<br>
            &lt;head&gt;<br>
                &lt;title&gt;CSS IDs Example&lt;/title&gt;<br>
                &lt;style&gt;<br>
                    #special {<br>
                        color: red;<br>
                        font-size: 20px;<br>
                    }<br>
                &lt;/style&gt;<br>
            &lt;/head&gt;<br>
            &lt;body&gt;<br>
                &lt;p id="special"&gt;This is a special paragraph.&lt;/p&gt;<br>
            &lt;/body&gt;<br>
            &lt;/html&gt;</code>
        </li>
    </ol>
    <hr>
    <p><strong>Key Points</strong></p>
    <ul>
        <li><strong>Inline Styles:</strong> Quick but not recommended for larger projects due to lack of separation of content and design.</li>
        <li><strong>Internal CSS:</strong> Useful for single pages or quick styling.</li>
        <li><strong>External CSS:</strong> Best practice for larger websites, allowing for easier maintenance and reuse.</li>
        <li><strong>Classes and IDs:</strong> Help apply styles to multiple elements (classes) or uniquely identify a single element (IDs).</li>
    </ul>
    <hr>
    <button class="next-module" data-next="quiz6">Take Quiz</button>
</div>
`,
content7: 
`<div>
    <h1>Text Formatting</h1>
    <h2>Module 7</h2>
        <hr>
    <p>HTML text formatting elements allow you to change the appearance of text on a web page. Here are some common HTML tags for text formatting:</p>
  <ol start="1">
        <li><strong>Bold Text</strong><br>
            <code>&lt;strong&gt;This text is bold.&lt;/strong&gt;</code><br>
            The <code>&lt;strong&gt;</code> tag is used for important text, and it typically renders as bold.
        </li>
    <hr>

        <li><strong>Italic Text</strong><br>
            <code>&lt;em&gt;This text is italicized.&lt;/em&gt;</code><br>
            The <code>&lt;em&gt;</code> tag emphasizes text, usually rendering it in italics.
        </li>
        <hr>
        <li><strong>Underline Text</strong><br>
            <code>&lt;u&gt;This text is underlined.&lt;/u&gt;</code><br>
            The <code>&lt;u&gt;</code> tag adds an underline to the text.
        </li>
        <hr>
        <li><strong>Strikethrough Text</strong><br>
            <code>&lt;s&gt;This text is strikethrough.&lt;/s&gt;</code><br>
            The <code>&lt;s&gt;</code> tag indicates that the text has been deleted or is no longer relevant, displaying it with a strikethrough.
        </li>
        <hr>
        <li><strong>Small Text</strong><br>
            <code>&lt;small&gt;This text is smaller.&lt;/small&gt;</code><br>
            The <code>&lt;small&gt;</code> tag renders the text in a smaller font size.
        </li>
        <hr>
        <li><strong>Big Text</strong><br>
            <code>&lt;big&gt;This text is bigger.&lt;/big&gt;</code><br>
            The <code>&lt;big&gt;</code> tag makes the text larger. (Note: <code>&lt;big&gt;</code> is not widely used in modern HTML; use CSS for size changes instead.)
        </li>
        <hr>
        <li><strong>Superscript Text</strong><br>
            <code>&lt;sup&gt;This text is superscript.&lt;/sup&gt;</code><br>
            The <code>&lt;sup&gt;</code> tag raises text above the baseline, often used for exponents.
        </li>
        <hr>
        <li><strong>Subscript Text</strong><br>
            <code>&lt;sub&gt;This text is subscript.&lt;/sub&gt;</code><br>
            The <code>&lt;sub&gt;</code> tag lowers text below the baseline, often used in chemical formulas.
        </li>
        <hr>
        <li><strong>Quote Text</strong><br>
            <code>&lt;blockquote&gt;This is a blockquote.&lt;/blockquote&gt;</code><br>
            The <code>&lt;blockquote&gt;</code> tag is used for longer quotations, usually indented.
        </li>
        <hr>
        <li><strong>Preformatted Text</strong><br>
            <code>&lt;pre&gt;This text is preformatted.&lt;/pre&gt;</code><br>
            The <code>&lt;pre&gt;</code> tag maintains whitespace and line breaks, displaying text in a fixed-width font.
        </li>
    </ol>
    <hr>
    <p><strong>Example Usage in a Document</strong><br>
    Here's how you might use various formatting tags in a simple HTML document:</p>
    <code>&lt;!DOCTYPE html&gt;<br>
    &lt;html&gt;<br>
    &lt;head&gt;<br>
        &lt;title&gt;Text Formatting Example&lt;/title&gt;<br>
    &lt;/head&gt;<br>
    &lt;body&gt;<br>
        &lt;h1&gt;Text Formatting in HTML&lt;/h1&gt;<br>
        &lt;p&gt;This is an &lt;strong&gt;important&lt;/strong&gt; message.&lt;/p&gt;<br>
        &lt;p&gt;You can also &lt;em&gt;emphasize&lt;/em&gt; text or make it &lt;u&gt;underlined&lt;/u&gt;.&lt;/p&gt;<br>
        &lt;p&gt;Sometimes you need to indicate &lt;s&gt;deleted&lt;/s&gt; content.&lt;/p&gt;<br>
        &lt;p&gt;This is a &lt;small&gt;small&lt;/small&gt; note.&lt;/p&gt;<br>
        &lt;p&gt;Water is H&lt;sub&gt;2&lt;/sub&gt;O.&lt;/p&gt;<br>
        &lt;p&gt;And E=mc&lt;sup&gt;2&lt;/sup&gt; is a famous equation.&lt;/p&gt;<br>
        &lt;blockquote&gt;This is a quoted text.&lt;/blockquote&gt;<br>
        &lt;pre&gt;This is    preformatted text.&lt;/pre&gt;<br>
    &lt;/body&gt;<br>
    &lt;/html&gt;</code>
    </p>
    <hr>
    <p><strong>Key Points</strong></p>
    <ul>
        <li>HTML text formatting tags help enhance the readability and visual appeal of text.</li>
        <li>Use formatting tags appropriately to maintain the semantic meaning of the content.</li>
        <li>For advanced styling, consider using CSS for more control over text appearance.</li>
    </ul>
    <hr>
    <button class="next-module" data-next="quiz7">Take Quiz</button>
</div>
`,
content8: 
`<div>
    <h1>HTML Quotation and Citation Element</h1>
    <h2>Module 8</h2>
    <hr>
    <ol>
        <li><strong>Blockquote</strong><br>
            The <code>&lt;blockquote&gt;</code> element is used for longer quotations that are usually indented.<br>
            <code>&lt;blockquote&gt;<br>
                "The only limit to our realization of tomorrow is our doubts of today." – Franklin D. Roosevelt<br>
            &lt;/blockquote&gt;</code>
        </li>
        <hr>
        <li><strong>Cite</strong><br>
            The <code>&lt;cite&gt;</code> element is used to reference the title of a creative work, such as a book, article, or song.<br>
            <code>&lt;p&gt;In her book, &lt;cite&gt;To Kill a Mockingbird&lt;/cite&gt;, Harper Lee addresses serious issues of race and injustice.&lt;/p&gt;</code>
        </li>
        <hr>
        <li><strong>Q (Inline Quotation)</strong><br>
            The <code>&lt;q&gt;</code> element is used for shorter inline quotations and automatically adds quotation marks around the text.<br>
            <code>&lt;p&gt;She said, &lt;q&gt;This is an example of an inline quotation.&lt;/q&gt;&lt;/p&gt;</code>
        </li>
        <hr>
        <li><strong>Abbr (Abbreviation)</strong><br>
            The <code>&lt;abbr&gt;</code> element can also be used for citations, especially when providing the full name of an abbreviation.<br>
            <code>&lt;p&gt;The &lt;abbr title="United Nations Educational, Scientific and Cultural Organization"&gt;UNESCO&lt;/abbr&gt; was founded in 1945.&lt;/p&gt;</code>
        </li>
        <hr>
        <li><strong>Address</strong><br>
            The <code>&lt;address&gt;</code> element is used to provide contact information for the author of a document or an article, often displayed in italics.<br>
            <code>&lt;address&gt;<br>
                Written by &lt;a href="mailto:author@example.com"&gt;Author Name&lt;/a&gt;&lt;br&gt;<br>
                123 Main St.&lt;br&gt;<br>
                City, Country<br>
            &lt;/address&gt;</code>
        </li>
    </ol>
    <p>These elements help structure content related to quotations and citations clearly and semantically in HTML.</p>
    <button class="next-module" data-next="quiz8">Take Quiz</button>
</div>
`,
content9: 
`<div>
        <h1>HTML Comments</h1>
        <h2>Module 9</h2>
        <hr>
        <p>HTML comments are used to insert notes or explanations within your HTML code that are not displayed in the web browser. They are helpful for developers to leave reminders or explanations for themselves or others who may read the code later.</p>
      <hr>       
        <div class="syntax">
            <h3>Syntax</h3>
            <p>HTML comments are written using the following syntax:</p>
            <pre>
                &lt;!-- This is a comment --&gt;
            </pre>
        </div>
        <hr>
        <div class="examples">
            <h3>Examples</h3>
            <ul>
                <li><strong>Single-line Comment:</strong>
                    <pre>
                        &lt;!-- This is a single-line comment --&gt;
                    </pre>
                </li>
                <li><strong>Multi-line Comment:</strong>
                    <pre>
                        &lt;!-- 
                            This is a multi-line comment.
                            It can span multiple lines.
                        --&gt;
                    </pre>
                </li>
                <li><strong>Commenting Out Code:</strong>
                    <p>Comments can be used to temporarily disable code without deleting it:</p>
                    <pre>
                        &lt;!-- &lt;p&gt;This paragraph will not be displayed.&lt;/p&gt; --&gt;
                    </pre>
                </li>
            </ul>
        </div>
        <hr>
        <div class="key-points">
            <h3>Key Points</h3>
            <ul>
                <li>Comments can help improve the readability of the code.</li>
                <li>They are ignored by the browser, meaning they won't affect the rendering of the HTML.</li>
                <li>Comments should be used wisely, as excessive commenting can clutter the code.</li>
                <li>Using comments effectively can help maintain clear communication within the code, especially in collaborative projects.</li>
            </ul>
        </div>
        <hr>
        <button class="next-module" data-next="quiz9">Take Quiz</button>
    </div>
`,

content10: `<div>
        <h1>HTML Div</h1>
        <h2>Module 10</h2>
        <hr>
        <p>HTML <code>&lt;div&gt;</code> elements are used as container elements to group together related content and apply styles or layout. Here are some examples of how to use <code>&lt;div&gt;</code> elements:</p>
        
        <hr>

        <h2>1. Basic Div Example</h2>
        <div>
            <p>This is a basic div.</p>
        </div>
        <p>This is a simple <code>&lt;div&gt;</code> that contains a paragraph. The <code>&lt;div&gt;</code> acts as a container, grouping the paragraph together. It doesn't add any visible styling or layout on its own.</p>
        
        <hr>

        <h2>2. Div with Class</h2>
        <div class="content">
            <p>This div has a class for styling.</p>
        </div>
        <p>This <code>&lt;div&gt;</code> has a class named "content." Classes can be used in CSS to apply specific styles to all elements with that class, allowing for easier styling and layout management.</p>

        <hr>

        <h2>3. Nested Divs</h2>
        <div>
            <h2>Main Title</h2>
            <div>
                <p>This is a nested div.</p>
            </div>
        </div>
        <p>This example shows a <code>&lt;div&gt;</code> containing a heading (<code>&lt;h2&gt;</code>) and another <code>&lt;div&gt;</code> inside it. Nesting <code>&lt;div&gt;</code> elements helps organize content hierarchically, making it clearer and easier to style.</p>

        <hr>

        <h2>4. Div for Layout</h2>
        <div class="container">
            <h3>Header</h3>
            <p>This is the main content area.</p>
        </div>
        <p>This <code>&lt;div&gt;</code> acts as a container for both a header (<code>&lt;h3&gt;</code>) and a paragraph. It can be styled as a section of a webpage, often used to group related content together.</p>

        <hr>

        <h2>5. Multiple Divs</h2>
        <div>
            <p>First div content.</p>
        </div>
        <div>
            <p>Second div content.</p>
        </div>
        <p>Here, two separate <code>&lt;div&gt;</code> elements are used, each containing a paragraph. This structure can help separate different sections of content on the page.</p>

        <hr>

        <h2>6. Div with ID</h2>
        <div id="unique">
            <p>This div has a unique ID.</p>
        </div>
        <p>This <code>&lt;div&gt;</code> has an ID named "unique." IDs are intended to be unique within a page and can be targeted in CSS or JavaScript for specific styling or behavior. They are often used for elements that need specific styling or manipulation.</p>

        <hr>

        <button class="next-module" data-next="quiz10">Take Quiz</button>
    </div>
`,

content11: '<h1>Assessment</h1><p>Click Start assesment to answer all the question regarding this module!</p> <button class="next-module" data-next="assessment">Start Assessment</button>',
};  

const quizzes = {
    quiz1: `
    <h1>QUIZ # 1</h1>
        <h2>What is the purpose of the <!DOCTYPE html> declaration?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To specify the title of the page')">To specify the title of the page</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To indicate that the document is HTML5')">To indicate that the document is HTML5</div>
            <div class="quiz-card" onclick="selectQuizAnswer(1, 'To start the body of the document')">To start the body of the document</div>          
        </div>
        <div id="selected-answer-1" class="selected-answer-container"></div>
        <button class="next-module" data-next="content2">Next Module</button>
    `,
    quiz2: `
    <h1>QUIZ # 2</h1>
        <h2>What are <th> and <td> tags used for in an HTML table?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(2, '<th> is for table header cells, and <td> is for table data cells.')"><th> is for table header cells, and <td> is for table data cells.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, 'Both are for creating table headers only.')">Both are for creating table headers only.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(2, '<th> is for rows, and <td> is for columns.')"><th> is for rows, and <td> is for columns.</div>
        </div>
        <div id="selected-answer-2" class="selected-answer-container"></div>
        <button class="next-module" data-next="content3">Next Module</button>
    `,
    quiz3: `
    <h1>QUIZ # 3</h1>
        <h2>Which attribute would you use to apply inline styles directly to an HTML element?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'class')">class</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'style')">style</div>
            <div class="quiz-card" onclick="selectQuizAnswer(3, 'id')">id</div>
        </div>
        <div id="selected-answer-3" class="selected-answer-container"></div>
        <button class="next-module" data-next="content4">Next Module</button>
    `,
    quiz4: `
    <h1>QUIZ # 4</h1>
        <h2>Which heading level is typically used for major sections within a page?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'h2')">h2</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'h3')">h3</div>
            <div class="quiz-card" onclick="selectQuizAnswer(4, 'h1')">h1</div>
        </div>
        <div id="selected-answer-4" class="selected-answer-container"></div>
        <button class="next-module" data-next="content5">Next Module</button>
    `,
    quiz5: `
    <h1>QUIZ # 5</h1>
        <h2>In the example <p>This is a <strong>text</strong> word and this is <em>text</em> word.</p> what do the <strong> and <em> tags do?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'They change the font size.')">They change the font size.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'They format the text as bold and italic, respectively.')">They format the text as bold and italic, respectively.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(5, 'They create new paragraphs.')">They create new paragraphs.</div>
        </div>
        <div id="selected-answer-5" class="selected-answer-container"></div>
        <button class="next-module" data-next="content6">Next Module</button>
    `,
    quiz6: `
    <h1>QUIZ # 6</h1>
        <h2>What does the following CSS rule do?</h2>
        <code>#special { color: red; font-size: 20px; }</code>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'It applies red color and 20px font size to all paragraphs.')">It applies red color and 20px font size to all paragraphs.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'It styles the element with the ID "special" to have red text and a font size of 20 pixels.')">It styles the element with the ID "special" to have red text and a font size of 20 pixels.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(6, 'It creates a new HTML element.')">It creates a new HTML element.</div>
        </div>
        <div id="selected-answer-6" class="selected-answer-container"></div>
        <button class="next-module" data-next="content7">Next Module</button>
    `,
    quiz7: `
    <h1>QUIZ # 7</h1>
        <h2>What is a key recommendation regarding the use of text formatting tags in HTML?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Use as many formatting tags as possible.')">Use as many formatting tags as possible.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Use formatting tags appropriately to maintain the semantic meaning of the content.')">Use formatting tags appropriately to maintain the semantic meaning of the content.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(7, 'Avoid using any formatting tags at all.')">Avoid using any formatting tags at all.</div>
        </div>
        <div id="selected-answer-7" class="selected-answer-container"></div>
        <button class="next-module" data-next="content8">Next Module</button>
    `,
    quiz8: `
    <h1>QUIZ # 8</h1>
        <h2>How does the <abbr> tag enhance the use of abbreviations in HTML?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'It creates a hyperlink to a definition.')">It creates a hyperlink to a definition.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'It automatically formats the abbreviation in bold.')">It automatically formats the abbreviation in bold.</div>
            <div class="quiz-card" onclick="selectQuizAnswer(8, 'It provides the full name or meaning of the abbreviation.')">It provides the full name or meaning of the abbreviation.</div>
        </div>
        <div id="selected-answer-8" class="selected-answer-container"></div>
        <button class="next-module" data-next="content9">Next Module</button>
    `,
    quiz9: `
    <h1>QUIZ # 9</h1>
        <h2>What is the correct syntax for an HTML comment?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(9, '// This is a comment')">// This is a comment</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, '/* This is a comment */')">/* This is a comment */</div>
            <div class="quiz-card" onclick="selectQuizAnswer(9, '<!-- This is a comment -->')"><!-- This is a comment --></div>
        </div>
        <div id="selected-answer-9" class="selected-answer-container"></div>
        <button class="next-module" data-next="content10">Next Module</button>
    `,
    quiz10: `
    <h1>QUIZ # 10</h1>
        <h2>What is the purpose of a <div> element in HTML?</h2>
        <div class="quiz-options">
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'To display images')">To display images</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'To create a container for grouping content')">To create a container for grouping content</div>
            <div class="quiz-card" onclick="selectQuizAnswer(10, 'To define the structure of a table')">To define the structure of a table</div>
        </div>
        <div id="selected-answer-10" class="selected-answer-container"></div>
        <button class="next-module" data-next="content11">Next Module</button>
    `,
};

const correctAnswers = {
    1: 'To indicate that the document is HTML5',
    2: '<th> is for table header cells, and <td> is for table data cells.',
    3: 'style',
    4: '<h2>',
    5: 'They format the text as bold and italic, respectively.',
    6: 'It styles the element with the ID "special" to have red text and a font size of 20 pixels.',
    7: 'Use formatting tags appropriately to maintain the semantic meaning of the content.',
    8: 'It provides the full name or meaning of the abbreviation.',
    9: '<!-- This is a comment -->',
    10: 'To create a container for grouping content',
};


const assessmentQuestions = [
    { question: "Which of the following is a good practice when using comments in HTML?", choices: ["A) Adding comments for every line of code", "B) Using comments to explain complex sections of code", "C) Writing comments in a language that only you understand"], selectedChoice: null, correctAnswer: "B) Using comments to explain complex sections of code" },
    { question: "What does the <cite> tag represent in an HTML document?", choices: ["A) A reference to the title of a creative work", "B) A link to an external website", "C) A block of text for a quote"], selectedChoice: null, correctAnswer: "A) A reference to the title of a creative work" },
    { question: "Which HTML tag is used for shorter inline quotations that automatically add quotation marks?", choices: ["A) <cite>", "B) <q>", "C) <blockquote>"], selectedChoice: null, correctAnswer: "B) <q>" },
    { question: "What is the purpose of the blockquote tag?", choices: ["A) To create a list", "B) To display longer quotations, usually indented", "C) To format text as code"], selectedChoice: null, correctAnswer: "B) To display longer quotations, usually indented" },
    { question: "In CSS, what is the purpose of classes?", choices: ["A) To create reusable styles that can be applied to multiple elements", "B) To apply styles to unique elements only", "C) To link external stylesheets"], selectedChoice: null, correctAnswer: "A) To create reusable styles that can be applied to multiple elements" },
    { question: "How does a browser typically handle spacing around paragraphs?", choices: ["A) No spacing is added.", "B) Spacing is added only if specified in CSS.", "C) Browsers automatically add space before and after each <p> element."], selectedChoice: null, correctAnswer: "C) Browsers automatically add space before and after each <p> element." },
    { question: "How do headings enhance SEO (Search Engine Optimization)?", choices: ["A) By making the text colorful", "B) By reducing the page loading time", "C) By helping search engines understand the structure of the content"], selectedChoice: null, correctAnswer: "C) By helping search engines understand the structure of the content" },
    { question: "What is the purpose of the placeholder attribute in an <input> tag?", choices: ["A) To specify the input field type", "B) To provide a hint to the user about what to enter", "C) To disable the input field"], selectedChoice: null, correctAnswer: "B) To provide a hint to the user about what to enter" },
    { question: "What does the href attribute specify in an anchor (<a>) tag?", choices: ["A) The title of the link", "B) The URL that the link points to", "C) The color of the link"], selectedChoice: null, correctAnswer: "B) The URL that the link points to" },
    { question: "What does the <!DOCTYPE html> declaration indicate?", choices: ["A) It declares that the document is an HTML5 document.", "B) It specifies the title of the page.", "C) It starts the body of the document."], selectedChoice: null, correctAnswer: "A) It declares that the document is an HTML5 document." },
    { question: "What information is contained within the <head> section of an HTML document?", choices: ["A) The visible content of the page", "B) Images and links", "C) Meta-information like the title and links to styles"], selectedChoice: null, correctAnswer: "C) Meta-information like the title and links to styles" },
]
;
let score = 0;
let currentQuestionIndex = 0;
const selectedAnswers = [];
const moduleQuizAnswers = {};

function selectQuizAnswer(module, answer) {
    moduleQuizAnswers[module] = answer; 

    const quizOptions = document.querySelectorAll(`#quiz${module} .quiz-card`);
    quizOptions.forEach(card => {
        card.classList.remove('selected');
    });

    const selectedCard = Array.from(quizOptions).find(card => card.textContent.trim() === answer);
    if (selectedCard) {
        selectedCard.classList.add('selected'); 
    }


    displaySelectedAnswer(module, answer);

    if (correctAnswers[module] === answer) {
        score++;
    }
}

function displaySelectedAnswer(module, answer) {
    const selectedAnswerContainer = document.getElementById(`selected-answer-${module}`);
    selectedAnswerContainer.innerHTML = `
        <div class="selected-answer-card">
            <h3>You selected:</h3>
            <p>${answer}</p>
        </div>
    `;
}


function displayQuiz(quizKey) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = quizzes[quizKey];
    addNextModuleEventListener();

    const nextButton = mainContent.querySelector('.next-module');
    nextButton.classList.add('quiz-next-button');
    nextButton.setAttribute('data-module', quizKey.replace('quiz', '')); 
}

function displayAssessment() {
    const mainContent = document.getElementById('main-content');
    const questionCard = `
        <div class="assessment-card">
            <h1>Assessment Question</h1>
            <p>${assessmentQuestions[currentQuestionIndex].question}</p>
        </div>`;
    
    const choiceCards = `
        <div class="choices">
            ${assessmentQuestions[currentQuestionIndex].choices.map(choice => `
                <div class="card choice-card" onclick="selectChoice('${choice}')">
                    <p>${choice}</p>
                </div>
            `).join('')}
        </div>`;
    
    const isLastQuestion = currentQuestionIndex === assessmentQuestions.length - 1;
    mainContent.innerHTML = `
        ${questionCard}
        ${choiceCards}
        <div class="button-container">
            <button class="back-question-button" onclick="prevQuestion()" style="display:${currentQuestionIndex === 0 ? 'none' : 'block'};">Back</button>
            <button class="next-question-button" onclick="${isLastQuestion ? 'showSummary()' : 'nextQuestion()'}" id="next-button" disabled>
                ${isLastQuestion ? 'Show Summary' : 'Next Question'}
            </button>
        </div>
        <div id="result-message"></div>`;
    
    toggleNextButton();
}

function selectChoice(choice) {
    assessmentQuestions[currentQuestionIndex].selectedChoice = choice;
    const choiceCards = document.querySelectorAll('.choice-card');
    choiceCards.forEach(card => {
        card.classList.remove('selected');
    });
    const selectedCard = Array.from(choiceCards).find(card => card.textContent.trim() === choice);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    toggleNextButton();
}

function toggleNextButton() {
    const nextButton = document.getElementById('next-button');
    nextButton.disabled = !assessmentQuestions[currentQuestionIndex].selectedChoice;
}

function nextQuestion() {
    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;
    currentQuestionIndex++;
    if (currentQuestionIndex < assessmentQuestions.length) {
        displayAssessment();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayAssessment();
    }
}

function showSummary() {

    window.scrollTo({ top: 0, behavior: 'smooth' });
    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;

    const resultMessage = document.getElementById('result-message');

    const moduleResults = Object.entries(moduleQuizAnswers).map(([module, answer]) => 
        `<div class="module-result"><strong>Module ${module}:</strong> Your answer: ${answer}</div>`
    ).join('');

    const resultContent = assessmentQuestions.map((question, index) => `
        <div class="question-result">
            <p class="question-text"><strong>${question.question}</strong></p>
            <p class="answer-text">Your answer: <span class="selected-answer">${selectedAnswers[index]}</span></p>
        </div>
    `).join('');

    resultMessage.innerHTML = `
        <h2>Your Selected Answers:</h2>
        <div class="module-results">${moduleResults}</div>
        <div class="question-results">${resultContent}</div>
        <div class="button-container">
            <button class="all-submit-button button" onclick="submitAssessment()">Submit Answers</button>
            <button class="re-take-button button" onclick="resetAssessment()">Retake Assessment</button>
        </div>
    `;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    mainContent.appendChild(resultMessage);
}



function resetAssessment() {
    currentQuestionIndex = 0;
    selectedAnswers.length = 0;
    displayAssessment();
}

function submitAssessment() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    selectedAnswers[currentQuestionIndex] = assessmentQuestions[currentQuestionIndex].selectedChoice;
    let totalCorrect = 0; 
    const moduleResults = Object.entries(moduleQuizAnswers).map(([module, answer], index) => {
        const isCorrect = correctAnswers[module] === answer; 
        if (isCorrect) {
            totalCorrect++;
        }
        return `
        <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
            <p class="question-text"><strong>Module ${module}:</strong></p>
            <p class="answer-text">Your answer: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${answer}</span></p>
            <p class="answer-text">Correct answer: <span class="correct-answer">${correctAnswers[module]}</span></p>
        </div>
    `;
}).join('');

    const resultContent = assessmentQuestions.map((question, index) => {
        const isCorrect = question.correctAnswer === selectedAnswers[index];

        if (isCorrect) {
            totalCorrect++;
        }

        return `
            <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                <p class="question-text"><strong>Question ${index + 1}: ${question.question}</strong></p>
                <p class="answer-text">Your answer: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${selectedAnswers[index]}</span></p>
                <p class="answer-text">Correct answer: <span class="correct-answer">${question.correctAnswer}</span></p>
            </div>
        `;
    }).join('');
    

    const mainMessage = `
        <div class="result-container">
            ${resultContent}
            <h3>Total Correct Answers: ${totalCorrect}</h3>
        </div>
    `;
    

    const scorePercentage = (totalCorrect / assessmentQuestions.length) * 100;


    const chartContainer = document.createElement('div');
    chartContainer.className = "chart-canvas-container";


    const canvas = document.createElement('canvas');
    canvas.id = "chart";
    canvas.height = 150;


    chartContainer.appendChild(canvas);


    const resultMessage = `
        <div class="chart-container">
            <div class="text-container">
                <h1 class="chart-heading">CONGRATULATIONS</h1>
                <p class="score-text">You've scored</p>
                <p class="score-percentage">${scorePercentage.toFixed(2)}%</p>
                <p class="tutorial-text">in this tutorial.</p>
            </div>
            ${chartContainer.outerHTML} <!-- Append the chart container -->
        </div>
        ${moduleResults} <!-- Display module quiz answers -->
        ${resultContent}
        <h3>Total Correct Answers: ${totalCorrect}</h3> <!-- Display the number of correct answers -->
        <div class="buttons">
            <button class="all-submit-button button learning-path-btn" onclick="goToLearningPath()">Go to Learning Path</button>
            <button class="learn-submit-button button next-course-btn" onclick="continueLearning()">Continue Learning</button>
        </div>`;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = resultMessage;

    const layout = ["Correct", "Wrong"];
    const score = [totalCorrect, assessmentQuestions.length - totalCorrect]; // Use dynamic values
    const barColors = ["#4b9b74", "#dd5555"];

    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: layout,
            datasets: [{
                backgroundColor: barColors,
                data: score,
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });


    const learningPathBtn = document.querySelector('.all-submit-button');
    const nextCourseBtn = document.querySelector('.learn-submit-button');

    learningPathBtn.addEventListener("click", function() {
        alert("Navigating to Learning Path...");

    });

    nextCourseBtn.addEventListener("click", function() {
        alert("Proceeding to the Next Course...");

    });
}




document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const contentType = this.getAttribute('data-content');
        const mainContent = document.getElementById('main-content');
        if (categoryContent[contentType]) {
            mainContent.innerHTML = categoryContent[contentType];
            addNextModuleEventListener();
        } else if (contentType.startsWith('quiz')) {
            displayQuiz(contentType);
        }
    });
});

function setDefaultContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = categoryContent.content1;
    addNextModuleEventListener();
}

function addNextModuleEventListener() {
    document.querySelectorAll('.next-module').forEach(button => {
        button.addEventListener('click', function () {
            const nextContent = this.getAttribute('data-next');
            const mainContent = document.getElementById('main-content');

            if (this.classList.contains('quiz-next-button')) {
                const currentModule = parseInt(this.getAttribute('data-module'));
                if (!moduleQuizAnswers[currentModule]) {
                    alert("Please pick an answer before proceeding to the next module.");
                    return;
                }
            }

            if (categoryContent[nextContent]) {
                mainContent.innerHTML = categoryContent[nextContent];
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
                addNextModuleEventListener();
                updateActiveSidebarItem(nextContent); 
            } else if (nextContent === 'assessment') {
                displayAssessment();
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
                updateActiveSidebarItem('content11'); 
            } else if (quizzes[nextContent]) {
                displayQuiz(nextContent);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
                updateActiveSidebarItem(nextContent); 
            }
        });
    });
}



function updateActiveSidebarItem(contentId) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    sidebarItems.forEach(item => item.classList.remove('active'));

    const activeSidebarItem = document.querySelector(`.sidebar-item[data-content="${contentId}"]`);
    if (activeSidebarItem) {
        activeSidebarItem.classList.add('active');
    }
}


window.onload = setDefaultContent;

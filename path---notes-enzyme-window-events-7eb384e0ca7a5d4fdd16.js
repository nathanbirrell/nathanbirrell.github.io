webpackJsonp([35974683655460],{400:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Nathan Birrell",author:"Nathan Birrell"}},markdownRemark:{id:"/Users/nathan/dev/nathanbirrell.github.io/src/pages/notes/enzyme-window-events.md absPath of file >>> MarkdownRemark",html:'<p>Enzyme is built for testing <em>React components</em>, it handles React’s synthetic event system quite well (things like <code class="language-text">onClick</code> events, for example).</p>\n<p>But what happens when you want to test event handlers that must be bound to the <code class="language-text">window</code>? Interactive components often require these, for <code class="language-text">keydown</code> events and so on.</p>\n<p>A quick solution is to mock the <code class="language-text">window.addEventListener</code> function implmentation and use it to assign each callback to an object that is easy to call in your tests, to simulate those events firing.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// Set-up event listener mock</span>\n<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span>addEventListener <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">genMockFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockImpl</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  map<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> callback<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Mount component that has set callback for keydown event</span>\n<span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>SomeComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Trigger keydown event</span>\nmap<span class="token punctuation">.</span><span class="token function">keydown</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">:</span> <span class="token string">\'Escape\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a href="https://github.com/airbnb/enzyme/issues/426#issuecomment-253515886">Source</a></p>',frontmatter:{title:"Test window-bound events on React components using Enzyme/Jest",date:"April 27, 2018",hide:null}}},pathContext:{slug:"/notes/enzyme-window-events/",previous:{fields:{slug:"/notes/typescript-key-types/"},frontmatter:{title:"Define key types in Typescript interfaces"}},next:{fields:{slug:"/notes/enzyme-test-hoc-state/"},frontmatter:{title:"Test internal state of higher-order components with Enzyme"}}}}}});
//# sourceMappingURL=path---notes-enzyme-window-events-7eb384e0ca7a5d4fdd16.js.map
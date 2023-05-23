"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[191],{72530:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(87462),i=n(63366),o=(n(15007),n(64983)),r=n(91515),s=["components"],l={},m={_frontmatter:l},d=r.Z;function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.mdx)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"memory-safety-and-c-successors"},"Memory safety and C++ successors"),(0,o.mdx)("h2",{id:"abstract"},"Abstract"),(0,o.mdx)("p",null,"Software exploits increasingly harm consumers and threaten national security.\nMemory safe programming languages provide substantial protection and some groups\nare calling for legislation incentivizing their adoption. Unfortunately, it\nisn't clear how companies with large existing C++ codebases can adapt. In an\neffort to help answer that question, this paper explores the adoption\nfeasibility of several memory safe alternatives to C++."),(0,o.mdx)("h2",{id:"introduction"},"Introduction"),(0,o.mdx)("p",null,"Policy setters are urging software providers to adopt memory safe programming\nlanguages. National Institute of Standards and Technology (NIST)'s October 2021\n",(0,o.mdx)("a",{parentName:"p",href:"https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/recommended-minimum-standards-vendor-or"},"Guidelines on Minimum Standards for Developer Verification of\nSoftware"),'\ncalled for usage of memory safe languages instead of C and C++ "where practical"\nbecause memory access errors can lead to privilege escalation, denial of\nservice, data corruption, and exfiltration of data. This was amplified in National Security Agency (NSA)\'s November 2022 ',(0,o.mdx)("a",{parentName:"p",href:"https://media.defense.gov/2022/Nov/10/2003112742/-1/-1/0/CSI_SOFTWARE_MEMORY_SAFETY.PDF"},"Software\nMemory\nSafety"),"\ncybersecurity information sheet which highlighted that a majority of\nvulnerabilities in well-known products result from memory safety violations.\nAcknowledging that memory safe languages do not eliminate memory\nsafety issues entirely, the NSA nonetheless recommends organizations shift\ntowards memory safe languages such as C#, Go, Java, Ruby, Rust, and Swift.\nIn January 2023, Consumer Reports published ",(0,o.mdx)("a",{parentName:"p",href:"https://advocacy.consumerreports.org/wp-content/uploads/2023/01/Memory-Safety-Convening-Report-1-1.pdf"},"Future of\nMemory Safety: Challenges and\nRecommendations"),",\nwhich reiterated the NSA's claims, adding that regulatory or market incentives\nare necessary for organizations to move away from C and C++.\nFinally, the White House's March 2023 ",(0,o.mdx)("a",{parentName:"p",href:"https://www.whitehouse.gov/wp-content/uploads/2023/03/National-Cybersecurity-Strategy-2023.pdf"},"National Cybersecurity\nStrategy"),"\noutlined a plan to establish liability for insecure software development\npractices and use federal purchasing power as additional leverage."),(0,o.mdx)("p",null,"While the call to transition to memory-safe languages is clear, the path to\ndoing so is not. Wholesale rewrites of large C++ codebases are cost\nprohibitive and incremental migrations are not well supported in\nmost safe languages. Fortunately, this is an area of active development and\nimprovements are coming."),(0,o.mdx)("p",null,"This paper surveys memory-safe C++ successor languages with a critical focus on\nadoption. We'll take a look at short-term, mid-term (3-5 years), and long-term\n(5-10 years) solutions."),(0,o.mdx)("h2",{id:"short-term-options"},"Short term options"),(0,o.mdx)("h3",{id:"use-dynamic-languages-where-applicable"},"Use dynamic languages where applicable"),(0,o.mdx)("p",null,"When high performance isn't required (e.g. user interfaces, business logic\ncomponents, and configuration systems), a memory-safe dynamic language such as\nJavaScript, ",(0,o.mdx)("a",{parentName:"p",href:"https://www.lua.org/"},"Lua"),", or ",(0,o.mdx)("a",{parentName:"p",href:"https://www.python.org/"},"Python"),"\ncan be used. One can embed an interpreter in a C++ application, or expose C++\ncode to an interpreter. For the former, the main C++ application launches the\ninterpreter as needed, while providing access to C++ functions and data\nstructures through bindings. In the latter, the main application is written in\nthe dynamic language and calls the C++ code as needed. Python is popular in this\nsetup."),(0,o.mdx)("p",null,"Adopting dynamic languages in a larger C++ system comes with costs proportional\nto the size of the interface boundary between the two languages. For every\nentity exposed to the dynamic language from C++, a binding must be created.\nLibraries like pybind11 can help mitigate this by simplifying the process.\nAlthough most bindings require only a few lines of code, the cost can\naccumulate. Additionally, there is increased maintenance cost if the layer\nbetween the languages changes frequently. Debugging can also be\nchallenging, as most debuggers don't support debugging across language\nboundaries. Furthermore, while dynamic languages offer memory safety benefits,\nthey often lack type-safety. Measures can be taken to improve this, such as\nusing ",(0,o.mdx)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," instead of JavaScript or\nadopting a Python type checker like ",(0,o.mdx)("a",{parentName:"p",href:"https://mypy-lang.org/"},"mypy"),"."),(0,o.mdx)("p",null,"A significant advantage of dynamic language adoption is that developers are\noften already familiar with the most popular ones, and even if not, they are\neasy to learn and use. Also, developers are generally more productive with\ndynamic languages than with C++ due to their simplicity. This has led to the\nnatural industry-wide adoption of dynamic languages. Another benefit is the\nfaster feedback loop for development, as a compilation phase is not required."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"References"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://v8.dev/"},"v8")," is a widely-used JavaScript engine that serves as both\nboth as an embedded language and as a consumer of C++ libraries via\n",(0,o.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/"},"node.js"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://pybind11.readthedocs.io/en/stable/"},"pybind11")," is a popular library\nfor creating bindings between C++ and Python.\n",(0,o.mdx)("a",{parentName:"li",href:"https://cppyy.readthedocs.io/en/latest/"},"cppyy")," and\n",(0,o.mdx)("a",{parentName:"li",href:"https://cython.org/"},"Cython")," are notable alternatives."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," is a superset of JavaScript that\nintroduces type safety."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://mypy-lang.org/"},"mypy")," is a widely-used type checker for Python."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.lua.org/"},"Lua")," is a popular language specifically designed for\nembedding.")),(0,o.mdx)("h3",{id:"use-rust-with-binding-layers"},"Use Rust with binding layers"),(0,o.mdx)("p",null,'Rust has gained recognition as a viable solution to C++\'s memory safety\nchallenges, and for good reason. Engineered with memory safety at its core, Rust\ncaters to the same use cases as C++ while providing additional benefits. Its\nthriving and expanding community demonstrates its success, as highlighted by\nearning the "Most Loved Programming Language" award in the ',(0,o.mdx)("a",{parentName:"p",href:"https://survey.stackoverflow.co/2022/"},"Stack Overflow\ndeveloper survey")," for seven consecutive\nyears. This achievement can be partially attributed to the language's leaders\nemphasizing inclusion and ergonomics."),(0,o.mdx)("p",null,"Though Rust offers numerous advantages for new projects, it is not a universal\nsolution for existing C++ systems. Integrating C++ with Rust encounters\nchallenges akin to those found in dynamic language interoperability, including\nthe requirement to create and maintain bindings. Moreover, Rust's ecosystem\nheavily depends on its Cargo build system, which can introduce complications\nwhen incorporating it into CMake or other prominant C++ build systems. Finally,\nRust's borrow checker can have a daunting learning curve for C++ developers."),(0,o.mdx)("p",null,"Despite these hurdles, Rust stands out as the only memory safe language\ndelivering performance on par with C++. By additionally providing type and\nthread safety, Rust is an enticing choice for those migrating to a\nsafe language in the short term."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"References"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust")," is a memory-safe language with a focus on\nperformance and safety."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://cxx.rs/"},"CXX")," is a library for creating bindings between C++ and Rust.")),(0,o.mdx)("h2",{id:"medium-term-options"},"Medium term options"),(0,o.mdx)("h3",{id:"streamlined-crust-interop-with-crubit"},"Streamlined C++/Rust interop with Crubit"),(0,o.mdx)("p",null,"Google's ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/google/crubit"},"Crubit")," project, anticipated to be\nproduction ready in the medium term, aims to facilitate seamless C++/Rust\ninteroperability. Crubit's goal is to parse C++ code and automatically generate\nhigh-quality Rust bindings while also providing the capability to perform the\nreverse operation. Since C++ code lacks lifetime analysis, Crubit introduces new\nannotations to specify lifetimes in C++ objects. Additionally, the project\nincorporates a tool to auto-generate these annotations based on heuristics.\nAdditional, optional annotations further enhance the ergonomics of the generated\ncode."),(0,o.mdx)("p",null,"Crubit's approach offers several benefits. First, it has a one-time cost for\nintegrating Rust into an existing C++ codebase; once the build system is in\nplace, the entire C++ codebase is readily available for Rust code. Second, the\nautomatic generation of bindings at build time eliminates the necessity of\nongoing binding maintenance."),(0,o.mdx)("p",null,"While Crubit offers a more cost-effective solution compared to creating bindings\nmanually with CXX, it is not without its drawbacks. It remains uncertain how\nergonomic the automatically generated Rust bindings will be. Moreover, given\nCrubit's deep integration with the Bazel build system, its compatibility with\npopular build systems like CMake is an open question."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"References"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Crubit's ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/google/crubit/blob/main/docs/design.md"},"High-level design of C++/Rust\ninterop"),"\ncomprehensively outlines the project's objectives, its methodology, and an\nin-depth analysis of alternatives."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/google/autocxx"},"Autocxx")," is a project with similar goals\nto Crubit, but strives to achieve them by utilizing existing Open Source\ntools like ",(0,o.mdx)("a",{parentName:"li",href:"https://clang.llvm.org/doxygen/group__CINDEX.html"},"libclang")," and\n",(0,o.mdx)("a",{parentName:"li",href:"https://rust-lang.github.io/rust-bindgen/"},"bindgen"),".")),(0,o.mdx)("h3",{id:"adopt-circle"},"Adopt Circle"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.circle-lang.org/"},"Circle")," is a C++ compiler by Sean Baxter that\noffers additional opt-in language features. A feature currently under\ndevelopment introduces memory safety through a Rust-inspired borrow checker.\nWhile this alone would not make the language memory safe, further development\ncould lead to that outcome."),(0,o.mdx)("p",null,"While safety features in Circle are still in their early stages, the project's\nrapid progress instills confidence in its eventual delivery. The more\nsignificant concern surrounding Circle lies in its long-term viability, as it is\ncurrently a closed-source project maintained by a single developer. If a\nlarge company were to acquire the project and make it open-source, these\nconcerns would be assuaged."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"References"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/seanbaxter/circle/blob/master/new-circle/README.md"},"New Circle\nnotes"),"\ndescribes the current state of Circle's development and discusses planned work\non the \"","[borrow_checker]",'" and "',"[relocate]",'" features.')),(0,o.mdx)("h3",{id:"use-swift-where-applicable"},"Use Swift where applicable"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://swift.org/"},"Swift")," is a compiled programming language developed by\nApple that achieves memory safety through a combination of static and dynamic\nchecks. Although it lags C++ and Rust in performance, it significantly outpaces\ndynamic languages, making it a potential alternative in many situations.\nSwift/C++ interoperability remains experimental, but, once matured, could become\na viable option for many use cases."),(0,o.mdx)("p",null,"However, adopting Swift in a large existing C++ codebase presents concerns.\nApple's hardware business raises questions about its commitment to supporting\nSwift as a first-class citizen on non-Apple platforms. Additionally, it is\nuncertain whether C++ interoperability will be prioritized over other planned\nSwift features. Lastly, Apple's exclusive control over the Swift language may\ncreate conflicts of interest with the open-source community."),(0,o.mdx)("p",null,"Despite these drawbacks, we believe Swift could emerge as a promising option,\nand its C++ interoperability should be monitored as it matures."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"References"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Swift's ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/apple/swift/blob/main/docs/CppInteroperability/CppInteroperabilityStatus.md"},"C++ Interoperability\nStatus"),"\ndocument outlines the current state of Swift's experimental support for C++\ninteroperability."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/apple/swift/pull/60501"},"Add a C++ Interoperability Vision Document"),"\npull request features a document proposing a vision for consuming C++ APIs\nfrom Swift."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/apple/swift-evolution/blob/main/visions/using-swift-from-c%2B%2B.md"},"Using Swift from\nC++"),"\nvision document outlines a concept for utilizing Swift APIs within C++ code.")),(0,o.mdx)("h2",{id:"long-term-options"},"Long term options"),(0,o.mdx)("h3",{id:"adopt-carbon"},"Adopt Carbon"),(0,o.mdx)("p",null,"Google's ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang"},"Carbon project")," is an\ninitiative to create a memory-safe programming language and supporting ecosystem\nthat can seamlessly interoperate with existing C++ codebases while being\neasy for experienced C++ engineers to learn. The project emphasizes a welcoming\nand inclusive community and touts over 4,000 members on its discord server."),(0,o.mdx)("p",null,"Despite Carbon's commendable objectives and approach, the project's engineering\nprogress has been slow. Core feature designs were slated for completion in the\n",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/c72c201133ddc7af56a5d5592fff5eb4a31d0e10/docs/project/roadmap.md"},"2021\nroadmap"),",\nthen the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/a0a4146bcfd1ac452b10cd5bde4a5da2c0c2a7af/docs/project/roadmap.md"},"2022\nroadmap"),",\nand now the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/9faf87e17142f1afc8fad623d50969401efa9485/docs/project/roadmap.md"},"2023\nroadmap"),".\nAfter at least four years of development, there is still no compiler for the\nproject. The limited tangible progress and Google being the sole company\nproviding dedicated resources contribute to a significant risk of project\ncancellation. Furthermore, memory safety feature designs have been deferred\nuntil at least the 0.2 release, according to the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/07360e367675ef6baa0c59d6b23d456489e79292/docs/project/milestones.md"},"milestones\ndefinition"),".\nThis delay has led some to believe that a substantial number of core features\nwill need revisiting."),(0,o.mdx)("p",null,"Although Carbon has much to achieve before becoming a viable option, its\nlong-term vision aligns well with the C++ community's needs for a safe and\neasily adoptable language."),(0,o.mdx)("h3",{id:"adopt-safe-c"},"Adopt Safe C++"),(0,o.mdx)("p",null,'Various initiatives are underway within WG21, the C++ Standardization Body, to\nimprove C++\'s safety. One proposal would allow source files to opt-in to a\n"profile" that enables memory safety features. Furthermore, in his paper\n',(0,o.mdx)("a",{parentName:"p",href:"https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1179r1.pdf"},"Lifetime safety: Preventing common\ndangling"),",\nHerb Sutter introduces lifetime annotations that, with a static analyzer,\nprevent numerous memory-related issues."),(0,o.mdx)("p",null,"While the proposed features enable a painless migration to memory-safety, there\nare significant challenges. First, these features will be contentious within\nWG21, which has shown reluctance to prioritize addressing C++'s memory safety\nproblems. Second, it remains unclear whether these features are sufficient to\nmake C++ a memory-safe language. Finally, C++'s complexity exacerbates the\ndifficulty of solving this problem, and the refusal to abandon backwards\ncompatibility with non-safe C++ makes the task even more challenging."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"References"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.open-std.org/JTC1/SC22/WG21/docs/papers/2023/p2759r0.pdf"},"DG Opinion on Safety for ISO\nC++"),"\nshowcases a safety direction suggested the WG21 Direction Group."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2022/p2687r0.pdf"},"Design Alternatives for Type-and-Resource Safe\nC++"),"\nintroduces the idea of safety profiles."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1179r1.pdf"},"Lifetime safety: Preventing common\ndangling"),"\nproposes a lifetime annotation mechanism for C++.")),(0,o.mdx)("h2",{id:"notable-alternatives-considered"},"Notable alternatives considered"),(0,o.mdx)("p",null,"We examined several languages that have been proposed as safe C++ replacements\nbut ultimately fell short of our requirements. Here is a brief overview of\nthese."),(0,o.mdx)("p",null,"The first language is the ",(0,o.mdx)("a",{parentName:"p",href:"https://ziglang.org/"},"Zig programming language"),". Zig\naims to be a simple, low-level language that includes powerful metaprogramming\ncapabilities and incorporates some memory safety features. Although Zig does\nprevent out-of-bounds array access and includes optional runtime checks, accessing\nuninitialized memory and invalid pointer indirection can be easily performed\nwithout safety escapes. Additionally, Zig's use of a C intermediate layer to\ninteroperate with C++ is cumbersome."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://www.val-lang.dev/"},"Val programming language")," is a part of a\nresearch project that investigates memory safety through mutable value\nsemantics. Val's primary focus is on research, not addressing practical\nconsiderations like C++ interop. Consequently, we anticipate Val's primary\ncontribution to be ideas incorporated into other languages."),(0,o.mdx)("h2",{id:"conclusion"},"Conclusion"),(0,o.mdx)("p",null,"This report explores transitioning C++ codebases to memory-safe languages. We\nanalyzed short, medium, and long-term options. Given the diversity of contexts\nand constraints companies face, we anticipate most will employ a combination of\nthese approaches. Although there is no single solution that works universally,\nwe encourage continued efforts to refine existing options and to explore new\npossibilities. Therefore, we welcome contributions from the broader community to\nadvance this critical topic."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-whitepapers-cpp-successor-update-index-md-0ebafdb745d93b7b5b43.js.map
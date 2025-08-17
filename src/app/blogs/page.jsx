
const Blogs = () => {
    const blogs = [
        {
            "id": "b1",
            "title": "React 19 Performance Tips: বাস্তবে যেভাবে ফাস্ট করা যায়",
            "slug": "react-19-performance-tips",
            "author": {
                "name": "Naim Web Dev",
                "avatar": "https://i.pravatar.cc/100?img=12"
            },
            "coverImage": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            "category": "React",
            "tags": ["react", "optimization", "hooks", "memo"],
            "excerpt": "React 19 এ rendering আরও স্মার্ট হয়েছে। এই পোস্টে দেখানো হলো useMemo, useCallback, Suspense ইত্যাদি দিয়ে কীভাবে পারফরম্যান্স টুইক করবেন।",
            "content": [
                "React 19 তে concurrent features এবং improved scheduling থাকার কারণে rerender কমানোর কৌশলগুলো আরও গুরুত্বপূর্ণ।",
                "কমন অপ্টিমাইজেশন: component memoization, list virtualization, এবং lazy routes.",
                "Suspense for data fetching ব্যবহার করলে UI responsive থাকে, fallback state ভালোভাবে ডিজাইন করুন।"
            ],
            "readTime": 7,
            "likes": 18,
            "commentsCount": 3,
            "status": "Published",
            "featured": true,
            "seo": {
                "metaTitle": "React 19 Performance Tips",
                "metaDescription": "React 19 দিয়ে অ্যাপ দ্রুত করার প্র্যাকটিক্যাল টেকনিকসমূহ।"
            },
            "createdAt": "2025-08-10T09:15:00.000Z",
            "updatedAt": "2025-08-12T08:00:00.000Z"
        },
        {
            "id": "b2",
            "title": "Node.js + Express Best Practices (2025)",
            "slug": "node-express-best-practices-2025",
            "author": {
                "name": "Naim Web Dev",
                "avatar": "https://i.pravatar.cc/100?img=32"
            },
            "coverImage": "https://images.unsplash.com/photo-1559526324-593bc073d938",
            "category": "Backend",
            "tags": ["node", "express", "security", "api"],
            "excerpt": "Folder structure, error handling, security middleware, এবং performance টিপস—সব এক জায়গায়।",
            "content": [
                "Folder structure: src/controllers, src/services, src/repositories, src/routes—separation of concerns বজায় রাখুন।",
                "Security: helmet, rate limiting, CORS, এবং input validation (zod/joi) বাধ্যতামূলক করুন।",
                "Performance: compression, HTTP caching headers, এবং pagination/filters ইমপ্লিমেন্ট করুন।"
            ],
            "readTime": 6,
            "likes": 25,
            "commentsCount": 5,
            "status": "Published",
            "featured": false,
            "seo": {
                "metaTitle": "Node.js & Express Best Practices 2025",
                "metaDescription": "প্রোডাকশন রেডি Node.js/Express অ্যাপ বানানোর সেরা নিয়ম।"
            },
            "createdAt": "2025-08-05T11:30:00.000Z",
            "updatedAt": "2025-08-11T14:40:00.000Z"
        },
        {
            "id": "b3",
            "title": "MongoDB Aggregation Pipelines: বাস্তব উদাহরণ",
            "slug": "mongodb-aggregation-examples",
            "author": {
                "name": "Team NatureGlow",
                "avatar": "https://i.pravatar.cc/100?img=7"
            },
            "coverImage": "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
            "category": "Database",
            "tags": ["mongodb", "aggregation", "analytics"],
            "excerpt": "Sales analytics, user growth, top products—সবকিছুর জন্য দরকারি aggregation স্টেজের কংক্রিট উদাহরণ।",
            "content": [
                "Common stages: $match, $group, $project, $sort, $limit, $lookup.",
                "Example: মাসভিত্তিক অর্ডার কাউন্ট ও রেভিনিউ ক্যালকুলেশন।",
                "Index strategy: compound indexes + partial filters পারফরম্যান্স বাড়ায়।"
            ],
            "readTime": 8,
            "likes": 14,
            "commentsCount": 2,
            "status": "Published",
            "featured": false,
            "seo": {
                "metaTitle": "MongoDB Aggregation Pipelines",
                "metaDescription": "Aggregation দিয়ে রিয়েল-ওয়ার্ল্ড রিপোর্টিং উদাহরণ।"
            },
            "createdAt": "2025-07-29T07:00:00.000Z",
            "updatedAt": "2025-08-09T10:20:00.000Z"
        },
        {
            "id": "b4",
            "title": "Tailwind CSS UI Patterns: Dashboard Components",
            "slug": "tailwind-dashboard-ui-patterns",
            "author": {
                "name": "Naim Web Dev",
                "avatar": "https://i.pravatar.cc/100?img=15"
            },
            "coverImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            "category": "Frontend",
            "tags": ["tailwind", "ui", "components", "dashboard"],
            "excerpt": "Card grid, filter bar, modal, data table—Tailwind দিয়ে রেডি প্যাটার্নের সংগ্রহ।",
            "content": [
                "Consistent spacing scale (p-4/6/8) এবং rounded-2xl ব্যবহার করুন।",
                "Accessible focus states: focus-visible:outline এবং aria-লেবেল যোগ করুন।",
                "Dark mode টোকেন: bg-neutral-900, text-neutral-100, ring-neutral-700."
            ],
            "readTime": 5,
            "likes": 9,
            "commentsCount": 1,
            "status": "Published",
            "featured": true,
            "seo": {
                "metaTitle": "Tailwind Dashboard UI Patterns",
                "metaDescription": "ড্যাশবোর্ড দ্রুত বানাতে প্রস্তুত টেইলউইন্ড প্যাটার্ন।"
            },
            "createdAt": "2025-08-02T16:10:00.000Z",
            "updatedAt": "2025-08-13T12:05:00.000Z"
        },
        {
            "id": "b5",
            "title": "Git Workflow: Feature Branch থেকে Pull Request",
            "slug": "git-workflow-feature-to-pr",
            "author": {
                "name": "Team DevOps",
                "avatar": "https://i.pravatar.cc/100?img=55"
            },
            "coverImage": "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            "category": "DevOps",
            "tags": ["git", "github", "workflow", "pr"],
            "excerpt": "Branch create, rebase/merge, PR template, এবং review checklist—স্টেপ বাই স্টেপ।",
            "content": [
                "Branch naming: feature/slug, fix/bug-id, chore/refactor.",
                "Rebase করে ছোট ছোট commit রাখুন; squash merge করলে history পরিষ্কার থাকে।",
                "PR checklist: tests pass, lint clean, screenshots, breaking changes উল্লেখ।"
            ],
            "readTime": 4,
            "likes": 30,
            "commentsCount": 6,
            "status": "Published",
            "featured": false,
            "seo": {
                "metaTitle": "Git Workflow Guide",
                "metaDescription": "ফিচার ব্রাঞ্চ থেকে পুল রিকোয়েস্ট পর্যন্ত বেস্ট প্র্যাকটিস।"
            },
            "createdAt": "2025-08-01T09:00:00.000Z",
            "updatedAt": "2025-08-14T09:25:00.000Z"
        },
        {
            "id": "b6",
            "title": "Freelancing for MERN Devs: 2025 Playbook",
            "slug": "freelancing-mern-2025",
            "author": {
                "name": "Naim Web Dev",
                "avatar": "https://i.pravatar.cc/100?img=20"
            },
            "coverImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
            "category": "Career",
            "tags": ["freelancing", "mern", "pricing", "portfolio"],
            "excerpt": "Niche নির্বাচন, গিগ স্ট্রাকচার, কেস স্টাডি, এবং প্রাইসিং—২০২5 আপডেটেড গাইড।",
            "content": [
                "Niche: SaaS landing, e-commerce MVP, admin dashboards—high ROI niches বেছে নিন।",
                "Proof: before/after screenshots, live URLs, short Loom demos যোগ করুন।",
                "Pricing: value-based quotes, clear scope, milestones, এবং revision policy সেট করুন।"
            ],
            "readTime": 9,
            "likes": 41,
            "commentsCount": 12,
            "status": "Published",
            "featured": true,
            "seo": {
                "metaTitle": "Freelancing MERN 2025",
                "metaDescription": "MERN ডেভেলপারদের জন্য ২০২৫ সালের ফ্রিল্যান্সিং প্লেবুক।"
            },
            "createdAt": "2025-08-15T18:30:00.000Z",
            "updatedAt": "2025-08-16T09:50:00.000Z"
        }
    ]

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Latest <span className="text-green-600">Blogs</span>
                </h1>

                {/* Blogs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
                        >
                            {/* Cover Image */}
                            <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="h-48 w-full object-cover"
                            />

                            {/* Content */}
                            <div className="p-5">
                                <span className="text-sm text-green-600 font-medium uppercase">
                                    {blog.category}
                                </span>
                                <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {blog.excerpt}
                                </p>

                                {/* Author + Meta */}
                                <div className="flex items-center gap-3 mt-4">
                                    <img
                                        src={blog.author.avatar}
                                        alt={blog.author.name}
                                        className="w-9 h-9 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            {blog.author.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {new Date(blog.createdAt).toDateString()} • {blog.readTime} min read
                                        </p>
                                    </div>
                                </div>

                                {/* Read More */}
                                <div className="mt-5">
                                    <a
                                        href={`/blogs/${blog.slug}`}
                                        className="inline-block text-green-600 font-medium text-sm hover:underline"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
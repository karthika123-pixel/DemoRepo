import React from "react";
import FeaturedSection from "../us-components/Blog/FeaturedSection";
import SubscriptionBanner from "../us-components/Blog/SubscriptionBanner";
import EditorsPickCarousel from "../us-components/Blog/EditorsPickCarousel";
import BlogGridSection from "../us-components/Blog/BlogGridSection";
import Layout from "../components/Layout/MainLayout";
import useFullSEO from "../utils/useFullSEO";

const BlogPage = () => {
  useFullSEO({
    title: "Milta Blog | Accounting, Tax, Finance and Growth Insights",
    description:
      "Read practical insights from Milta on bookkeeping, tax, accounting operations, finance, and business growth.",
    keywords:
      "milta blog, accounting blog, tax insights, bookkeeping tips, finance articles, business growth blog",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/blogs",
    ogTitle: "Milta Blog | Accounting, Tax, Finance and Growth Insights",
    ogDescription:
      "Read practical insights from Milta on bookkeeping, tax, accounting operations, finance, and business growth.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/blogs",
  });

  return (
    <Layout>
      <SubscriptionBanner />
      <FeaturedSection />
      <EditorsPickCarousel />
      <BlogGridSection />
    </Layout>
  );
};

export default BlogPage;

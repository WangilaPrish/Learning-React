import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PostCardProps {
    title: string;
    excerpt: string;
    fullText: string;
    onReadMore: () => void;
}

export default function PostCard({ title, excerpt, onReadMore }: PostCardProps) {
    return (
        <Card className="bg-white shadow hover:shadow-lg transition rounded-xl">
            <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
                <Button variant="outline" onClick={onReadMore}>Read More</Button>
            </CardContent>
        </Card>
    );
}

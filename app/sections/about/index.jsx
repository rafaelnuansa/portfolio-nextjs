"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I am a full-stack web developer, and my journey to becoming a web developer began when
							I was in junior high school in 2012. I started as a web designer for Blogger. In 2018,
							after graduating from vocational school, I began learning the Codeigniter framework
							and started freelancing while also working at Djuanda University.
						</p>
						<p>
							During my job, I made the most of my free time to continue learning, exploring
							technologies like Laravel, ReactJS, and several other programming languages. Until
							now, I am still actively working as a freelancer.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

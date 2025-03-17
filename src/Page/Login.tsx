import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().email("유효한 이메일을 입력하세요").nonempty("이메일을 입력하세요"),
    password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);

    const ontoggle = () => {
        setIsVisible((prev) => !prev);
    };

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema), // Zod 스키마와 연결
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        navigate("/");
    };

    return (
        <section>
            <div className="w-full ml-auto mr-auto xl:container ">
                <div className="row">
                    <div className="w-full pt-20 pb-20 ">
                        <h2 className="text-center text-2xl font-600 mb-15">로그인</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
                            <div className="relative">
                                <input
                                    {...register("email")}
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`pt-6 pl-3 pb-1 block w-full h-13 mt-0 bg-ui-bg-field border rounded-md appearance-none
                                    focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base
                                    hover:bg-ui-bg-field-hover peer border-gray-300 outline-none placeholder-transparent
                                    ${email && "focus:ring-2 focus:ring-[rgba(204,7,30,1)]"}`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email"
                                    className={`pointer-events-none absolute left-3 text-gray-500 transition-all top-1/2 transform -translate-y-1/2
                                    ${email ? "top-3 text-sm text-[rgba(204,7,30,1)]" : "text-lg text-gray-400"} 
                                    peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400
                                    peer-focus:top-3 peer-focus:text-sm peer-focus:text-[rgba(204,7,30,1)]`}
                                >
                                    이메일 <span className="text-[rgba(204,7,30,1)]">*</span>
                                </label>

                                {errors.email && <p className="pt-2 pl-2 text-small text-red-500">{errors.email.message}</p>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register("password")}
                                    type={isVisible ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`pt-6 pl-3 pb-1 block w-full h-13 mt-0 bg-ui-bg-field border rounded-md appearance-none
                                    focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base
                                    hover:bg-ui-bg-field-hover peer border-gray-300 outline-none placeholder-transparent
                                    ${password && "focus:ring-2 focus:ring-[rgba(204,7,30,1)]"}`}
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="password"
                                    className={`pointer-events-none absolute left-3 text-gray-500 transition-all  top-1/2 transform -translate-y-1/2
                                    ${password ? "top-3 text-sm text-[rgba(204,7,30,1)]" : "text-lg text-gray-400"} 
                                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400
                                    peer-focus:top-3 peer-focus:text-sm peer-focus:text-[rgba(204,7,30,1)]`}
                                >
                                    비밀번호 <span className="text-[rgba(204,7,30,1)]">*</span>
                                </label>
                                <button
                                    onClick={ontoggle}
                                    type="button"
                                    className="text-ui-fg-subtle px-4 focus:outline-none transition-all duration-150 outline-none 
                                       focus:text-ui-fg-base absolute right-0 top-1/2 transform -translate-y-1/2"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {isVisible ? (
                                            <>
                                                <path d="M2.5 9.99992C2.5 9.99992 5.22727 4.58325 10 4.58325C14.7727 4.58325 17.5 9.99992 17.5 9.99992C17.5 9.99992 14.7727 15.4166 10 15.4166C5.22727 15.4166 2.5 9.99992 2.5 9.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M9.99965 12.074C11.145 12.074 12.0735 11.1455 12.0735 10.0001C12.0735 8.85477 11.145 7.92627 9.99965 7.92627C8.85428 7.92627 7.92578 8.85477 7.92578 10.0001C7.92578 11.1455 8.85428 12.074 9.99965 12.074Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </>
                                        ) : (
                                            <>
                                                <path
                                                    d="M8.56818 4.70906C9.0375 4.59921 9.518 4.54429 10 4.54543C14.7727 4.54543 17.5 9.99997 17.5 9.99997C17.0861 10.7742 16.5925 11.5032 16.0273 12.175M11.4455 11.4454C11.2582 11.6464 11.0324 11.8076 10.7815 11.9194C10.5306 12.0312 10.2597 12.0913 9.98506 12.0961C9.71042 12.101 9.43761 12.0505 9.18292 11.9476C8.92822 11.8447 8.69686 11.6916 8.50262 11.4973C8.30839 11.3031 8.15527 11.0718 8.05239 10.8171C7.94952 10.5624 7.899 10.2896 7.90384 10.0149C7.90869 9.74027 7.9688 9.46941 8.0806 9.2185C8.19239 8.9676 8.35358 8.74178 8.55455 8.55452M14.05 14.05C12.8845 14.9384 11.4653 15.4306 10 15.4545C5.22727 15.4545 2.5 9.99997 2.5 9.99997C3.34811 8.41945 4.52441 7.03857 5.95 5.94997L14.05 14.05Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path d="M2.5 2.5L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </>
                                        )}
                                    </svg>
                                </button>
                                {errors.password && <p className="pt-2 pl-2 text-small text-red-500">{errors.password.message}</p>}
                            </div>

                            <small className="block text-right">
                                아직 회원이 아니신가요?
                                <Link to="/join" className="ml-1 underline underline-offset-3 text-[rgba(204,7,30,1)]">
                                    회원가입
                                </Link>
                            </small>

                            <button type="submit" className="bg-[rgba(204,7,30,.8)] hover:bg-[rgba(204,7,30,1)] text-white rounded-lg transition-all p-2 w-full">
                                로그인
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

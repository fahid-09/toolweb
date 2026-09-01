import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, unlink, mkdir } from "fs/promises";
import path from "path";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

export async function POST(request: NextRequest) {
    try {
        console.log("Excel API started");

        const formData = await request.formData();

        const file = formData.get("file") as File;

        if (!file) {
            console.log("No Excel file received");

            return NextResponse.json(
                { error: "No Excel file received" },
                { status: 400 }
            );
        }

        console.log("Excel file received:", file.name);

        const uploadDir = path.join(
            process.cwd(),
            "temp",
            "uploads"
        );

        const outputDir = path.join(
            process.cwd(),
            "temp",
            "output"
        );

        await mkdir(uploadDir, { recursive: true });
        await mkdir(outputDir, { recursive: true });

        console.log("Folders ready");

        const inputPath = path.join(
            uploadDir,
            file.name
        );

        const bytes = await file.arrayBuffer();

        const buffer = Buffer.from(bytes);

        await writeFile(inputPath, buffer);

        console.log("Excel file saved:", inputPath);

        const sofficePath =
            "C:\\Program Files\\LibreOffice\\program\\soffice.com";

        console.log("Starting LibreOffice...");

        const result = await execFileAsync(
            sofficePath,
            [
                "--headless",
                "--convert-to",
                "pdf",
                "--outdir",
                outputDir,
                inputPath,
            ]
        );

        console.log(
            "LibreOffice stdout:",
            result.stdout
        );

        console.log(
            "LibreOffice stderr:",
            result.stderr
        );

        const pdfName =
            path.parse(file.name).name + ".pdf";

        const pdfPath = path.join(
            outputDir,
            pdfName
        );

        console.log("PDF path:", pdfPath);

        const pdfBuffer = await readFile(pdfPath);

        console.log("Excel converted to PDF successfully");

        await unlink(inputPath);

        await unlink(pdfPath);

        console.log("Temporary files deleted");

        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${pdfName}"`,
            },
        });

    } catch (error) {

        console.error("================================");
        console.error("EXCEL CONVERSION ERROR");
        console.error(error);
        console.error("================================");

        return NextResponse.json(
            {
                error: "Excel to PDF conversion failed",
                details:
                    error instanceof Error
                        ? error.message
                        : String(error),
            },
            { status: 500 }
        );
    }
}

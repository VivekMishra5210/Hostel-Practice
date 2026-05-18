from flask import Flask, render_template, request, jsonify
import time

app = Flask(__name__)

APPLICATION_OPEN = True

@app.route("/")
def index():
    return render_template("index.html", application_open=APPLICATION_OPEN)

@app.route("/submit", methods=["POST"])
def submit():

    hostel_preference = request.form.get("hostel_preference")
    room_preference = request.form.get("room_preference")
    emergency_name = request.form.get("emergency_name")
    emergency_email = request.form.get("emergency_email")
    emergency_mobile = request.form.get("emergency_mobile")
    undertaking = request.form.get("undertaking")

    if not all([
        hostel_preference,
        room_preference,
        emergency_name,
        emergency_email,
        emergency_mobile,
        undertaking
    ]):
        return jsonify({
            "success": False,
            "message": "Please fill all fields"
        })

    # Simulate server processing delay
    time.sleep(1)

    return jsonify({
        "success": True,
        "message": "Successfully applied for hostel."
    })


if __name__ == "__main__":
    app.run(debug=True)